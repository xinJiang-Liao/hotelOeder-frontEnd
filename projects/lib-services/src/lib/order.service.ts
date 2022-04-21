import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { httpOptions2 } from './_utils';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiHost: string | null;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiHost = this.config.get('apiHost');
    if (!this.apiHost) {
      this.apiHost = '';
    }
  }

  /*获取 所有订单*/
  public getOrders(
    state?: any,
    startAt?: string,
    endAt?: string
  ): Observable<any> {
    const url = `${this.apiHost}/orders/event`;
    const params = { state: state, startAt: startAt, endAt: endAt };
    return this.http.get(url, httpOptions2(params));
  }

  /*修改 订单状态以及完成时间*/
  /*完成订单支付的操作*/
  public upDate(
    id: number,
    state: string,
    endtime: string,
    payment_amount: string
  ): Observable<any> {
    const url = `${this.apiHost}/orders/upDate`;
    const body: any = {
      id: id,
      state: state,
      endtime: endtime,
      payment_amount: payment_amount,
    };
    return this.http.post(url, body);
  }

  /*删除 指定id的订单*/
  public deleteOrder(id: number): Observable<any> {
    const url = `${this.apiHost}/orders/DelOrder`;
    const body: any = { id: id };
    return this.http.post(url, body);
  }

  /*创建 订单*/
  public pushOrder(
    position: string,
    desk_code: string,
    phone: string,
    foods: foodData[],
    createtime: string,
    state: string,
    Charge_amount: number
  ): Observable<any> {
    const url = `${this.apiHost}/orders/pushOrder`;
    const body: any = {
      position: position,
      desk_code: desk_code,
      phone: phone,
      foods: foods,
      createtime: createtime,
      state: state,
      Charge_amount: Charge_amount,
    };
    return this.http.post(url, body);
  }
}

export interface foodData {
  type: string;
  price: number;
  number: number;
  volume: string;
  foodName: string;
}
