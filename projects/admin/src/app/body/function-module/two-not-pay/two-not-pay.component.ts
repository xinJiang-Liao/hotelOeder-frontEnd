import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { OrderService } from '@service/order.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogData } from '../one-order/main/main.component';

import * as moment from 'moment/moment';
import { NzMessageService } from 'ng-zorro-antd/message';

interface ItemData {
  id: number;
  position: string;
  desk_code: string;
  phone: string;
  createtime: string;
  foods: any;
  state: string;
  Charge_amount: number;
  endtime?: string;
  payment_amount?: number;
}

@Component({
  selector: 'app-two-not-pay',
  templateUrl: './two-not-pay.component.html',
  styleUrls: ['./two-not-pay.component.scss'],
})
export class TwoNotPayComponent implements OnInit {
  size: NzButtonSize = 'large';
  constructor(
    public orderService: OrderService,
    public dialog: MatDialog,
    private message: NzMessageService
  ) {}

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData?: ItemData[] = [];
  setOfCheckedId = new Set<number>();
  public endtime: any;
  public dataID: any;
  public price: number = 0;
  public searchID?: number;
  public ID: any;

  /*对选中数据ID的存储以及取消的删除*/
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  /*监听选择的变化，然后执行ID的删除和保存*/
  onItemChecked(id: number, checked: boolean, Charge_amount?: any): void {
    this.updateCheckedSet(id, checked);
    this.openDialog(Charge_amount);
    this.deletItem(id);
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.orderService.getOrders('未支付').subscribe((response: any) => {
      this.listOfData = response;
    });
  }

  searchData(id: any) {
    console.log('执行了', id);
    if (id) {
      const a = this.listOfData!.filter((x: any) => {
        if (x.id == id) {
          return x;
        }
      });
      this.listOfData = a;
      console.log(this.listOfData);
    }
  }

  reset() {
    this.getData();
    this.searchID = undefined;
  }

  /**
   * 弹窗
   * */
  isVisible = false;
  isConfirmLoading = false;
  public foodData: any;

  showModal(data: any): void {
    this.foodData = data;
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  deletItem(id?: any, state?: boolean) {
    if (id) {
      this.ID = id;
    }
    if (this.ID) {
      if (state) {
        this.orderService.deleteOrder(this.ID).subscribe((response: any) => {
          this.message.create('success', '订单已取消');
          this.getData();
        });
      }
    }
  }

  openDialog(price?: number, open?: boolean) {
    if (price) {
      this.price = price;
      console.log(this.price);
    }
    if (open) {
      const dialogRef = this.dialog.open(FoodsComponent, {
        /*date可以写在这里*/
        data: this.price,
      });
      // t弹窗关闭后返回弹窗中的data到父级中，通过订阅获取
      dialogRef.afterClosed().subscribe((result) => {
        // console.log(result);
        if (result) {
          for (let x of this.setOfCheckedId.keys()) {
            this.dataID = x;
            console.log(this.dataID);
          }
          this.endtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
          this.orderService
            .upDate(this.dataID, '已支付', this.endtime, result)
            .subscribe((response: any) => {
              this.message.create('success', '订单已确认');
              this.getData();
            });
        }
      });
    }
  }
}

@Component({
  selector: 'foodsComponent',
  templateUrl: 'foods.component.html',
})
export class FoodsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public payment_amount: number = 0;
  onClick() {
    // let foodData = { ...this.data };
    return this.payment_amount;
  }
}
