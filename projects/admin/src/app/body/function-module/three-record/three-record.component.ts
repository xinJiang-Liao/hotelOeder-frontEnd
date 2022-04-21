import { Component, OnInit } from '@angular/core';
import { getISOWeek } from 'date-fns';
import { OrderService } from '@service/order.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as moment from 'moment/moment';

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
  selector: 'app-three-record',
  templateUrl: './three-record.component.html',
  styleUrls: ['./three-record.component.scss'],
})
export class ThreeRecordComponent implements OnInit {
  public startAt?: string;
  public endAt?: string;
  public date = null;

  /**
   * 表格相关
   * */
  searchValue = '';
  visible = false;
  listOfData: ItemData[] = [];
  listOfDisplayData = [...this.listOfData];

  constructor(
    public orderService: OrderService,
    private message: NzMessageService
  ) {
    this.startAt = moment().startOf('days').format('YYYY-MM-DD HH:mm:ss');
    this.endAt = moment().endOf('days').format('YYYY-MM-DD HH:mm:ss');
  }

  ngOnInit(): void {
    /*默认获取当天的订单信息*/
    this.orderService
      .getOrders('', this.startAt, this.endAt)
      .subscribe((response: any) => {
        this.listOfData = response;
        console.log(response);
        console.log(this.listOfData);
      });
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

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
    this.startAt = moment(result[0]).format('YYYY-MM-DD HH:mm:ss');
    this.endAt = moment(result[1]).format('YYYY-MM-DD HH:mm:ss');
    this.orderService
      .getOrders('', this.startAt, this.endAt)
      .subscribe((response: any) => {
        this.listOfData = response;
        this.message.create(
          'success',
          `${'选择了'}${this.startAt}${' 到 '}${this.endAt}${'的所有订单数据'}`
        );
      });
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: ItemData) => item.phone.indexOf(this.searchValue) !== -1
    );
  }
}
