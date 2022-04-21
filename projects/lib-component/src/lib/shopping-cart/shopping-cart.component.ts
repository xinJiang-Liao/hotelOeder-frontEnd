import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from '@service/order.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment/moment';
import { NzMessageService } from 'ng-zorro-antd/message'; //获取路由传参用到

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit /*, DoCheck*/ {
  public sumdata: number = 0;
  public datasource: any;
  public position: string = '堂食';
  public desk_code: string = '';
  public phone: string = '';
  public createtime: any;

  constructor(
    public dialog: MatDialog,
    private orderService: OrderService,
    private activateInfo: ActivatedRoute,
    private message: NzMessageService
  ) {
    let phone: any;
    phone = localStorage.getItem('loginMenus');
    if (phone) {
      this.phone = phone;
      /*从url中获取点餐方式和桌号/房间号*/
      this.activateInfo.queryParams.subscribe((queryParams) => {
        this.position = queryParams['position'];
        this.desk_code = queryParams['desk_code'];
      });
    } else {
      let user: any;
      user = localStorage.getItem('admin');
      console.log(JSON.parse(user).phone);
      this.phone = JSON.parse(user).phone;
    }
  }

  onSubmit() {
    this.activateInfo.queryParams.subscribe((queryParams) => {
      if (!queryParams['position']) {
        this.showModal();
      }else {
        this.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        this.creatOrder()
      }
    });
  }

  /*获取所点菜品的总价*/
  getsum(value: any) {
    this.sumdata = value;
  }

  /*获取菜品信息*/
  getData(value: any) {
    this.datasource = value;
    console.log(this.datasource);
  }

  creatOrder() {
    this.orderService
      .pushOrder(
        this.position,
        this.desk_code,
        this.phone,
        this.datasource,
        this.createtime,
        '未支付',
        this.sumdata
      )
      .subscribe((response: any) => {
        this.message.create('success', '订单创建成功');
      });
  }

  /*------------------------对话框----------------------------*/
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    if (
      (this.position === '客房' || this.position === '堂食') &&
      this.desk_code !== ''
    ) {
      this.isOkLoading = true;
      this.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
      setTimeout(() => {
        this.creatOrder()
        this.isVisible = false;
        this.isOkLoading = false;
      }, 800);
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  /*------------------------对话框----------------------------*/

  /*----------------------暂且未使用的弹窗-------------------------------*/
  openDialog() {
    this.dialog.open(YHComponent, {
      /*date可以写在这里*/
      width: '600px',
      height: '200px',
      data: '扫描会员码进行登陆',
    });
  }

  openDialog2() {
    this.dialog.open(YHQComponent, {
      /*date可以写在这里*/
      width: '600px',
      height: '200px',
      data: '扫描优惠券进行抵扣优惠',
    });
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'YH.component',
  templateUrl: './YH.component.html',
})
export class YHComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

@Component({
  selector: 'YHQ',
  templateUrl: './YHQ.html',
})
export class YHQComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
