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
  public getFoods(type?: any): Observable<any> {
    const url = `${this.apiHost}/goods/event`;
    const params = type;
    return this.http.get(url, httpOptions2(params));
  }

  /*修改 订单状态以及完成时间*/
  /*完成订单支付的操作*/
  public upDate(id: number, state: string, endtime: string): Observable<any> {
    const url = `${this.apiHost}/goods/upDate`;
    const body: any = { id: id, state: state, endtime: endtime };
    return this.http.post(url, body);
  }

  /*删除 指定id的订单*/
  public deleteFoods(id: number): Observable<any> {
    const url = `${this.apiHost}/goods/DelFood`;
    const body: any = { id: id };
    return this.http.post(url, body);
  }

  /*创建 订单*/
  public pushFoods(
    position: string,
    desk_code: string,
    phone: string,
    foods: foodData[],
    createtime: string,
    state: string,
    Charge_amount: number
  ): Observable<any> {
    const url = `${this.apiHost}/goods/pushFood`;
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
