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

  public get(oid: number, query?: any): Observable<any> {
    // const url = `${this.apiHost}/api/user/order2/${oid}`;
    const url = `${this.apiHost}/api/order/per/user`;
    const params: any = query || {};
    params.id = oid;
    return this.http.get(url, httpOptions2(params));
  }

  public check(type: string): Observable<any> {
    const url = `${this.apiHost}/api/order/check/${type}`;
    return this.http.get(url);
  }

  public search(query?: any): Observable<any> {
    const url = `${this.apiHost}/api/order/search`;
    const params = query || { offset: 0, limit: 10 };
    return this.http.get(url, httpOptions2(params));
  }

  public gift(orderitemid: number, phone: string, quantity: number): Observable<any> {
    const url = `${this.apiHost}/api/user/gift/goods`;
    const body: any = { itemId: orderitemid, phone: phone, quantity: quantity };
    return this.http.post(url, body);
  }

  // public verifySearch(code: string): Observable<any> {
  //   const url = `${this.apiHost}/api/order/verify/${code}`;
  //   return this.http.get(url);
  // }

  public verifyWithoutCode(id: number): Observable<any> {
    const url = `${this.apiHost}/api/order/verify/without/code`;
    const body: any = { id: id };
    return this.http.post(url, body);
  }

  public applyRefund(orderid: number, orderitemid: number, quantity: number): Observable<any> {
    const url = `${this.apiHost}/api/order/${orderid}/order_item/${orderitemid}/refund`;
    const body = { quantity: quantity };
    return this.http.post(url, body);
  }

  public refund(id: number, reason: string, items?: any[]): Observable<any> {
    //   items: [
    //     { id: '', // item.id
    //       quantity: '', // 数量，可选
    //       refund_fee: ''} // 退款手续费比率, 可选
    //   ]
    const url = `${this.apiHost}/api/order/refund4`;
    const body = { id: id, reason: reason, items: items };
    return this.http.post(url, body);
  }

  public refund2(req: any): Observable<any> {
    // {
    //   "out_trade_no": "16044560178590163680",
    //   "refundReason": "测试",
    //   "items": [
    //   {
    //     "id": 65961,
    //     "quantity": 3
    //   }
    // ],
    //   "ignoreUsed": false
    // }
    const url = `${this.apiHost}/api/order3/refund`;
    const body = req;
    return this.http.post(url, body);
  }

  public extend(id: number): Observable<any> {
    const url = `${this.apiHost}/api/order/extend`;
    const body = { id: id };
    return this.http.post(url, body);
  }

  public trackExpress(orderid: number, itemid: number): Observable<any> {
    const url = `${this.apiHost}/api/order/${orderid}/item/${itemid}/logistics`;
    return this.http.get(url);
  }

  public invitePay(order: any): Observable<any> {
    const url = `${this.apiHost}/api/order/invite`;
    const body = order;
    return this.http.post(url, body);
  }

  public chargeRelated(oid: number): Observable<any> {
    const url = `${this.apiHost}/api/order3/refund/charge/related`;
    const params = { oid: oid };
    return this.http.get(url, httpOptions2(params));
  }
}
