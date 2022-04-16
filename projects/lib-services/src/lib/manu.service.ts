import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { httpOptions2 } from '@service/_utils';

@Injectable({
  providedIn: 'root',
})
export class ManuService {
  public apiHost = '';
  //
  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiHost = this.config.get();
    if (!this.apiHost) {
      this.apiHost = '';
    }
  }

  /*获取 所有菜品*/
  public getFoods(type?: any): Observable<any> {
    const url = `${this.apiHost}/goods/event`;
    const params = type;
    return this.http.get(url, httpOptions2(params));
  }

  /*修改 菜品信息*/
  public upDate(data: foodData): Observable<any> {
    const url = `${this.apiHost}/goods/upDate`;
    const body: any = data;
    return this.http.post(url, body);
  }

  /*删除 指定id的菜品*/
  public deleteFoods(id: number): Observable<any> {
    const url = `${this.apiHost}/goods/DelFood`;
    const body: any = { id: id };
    return this.http.post(url, body);
  }

  /*添加 菜品*/
  public pushFoods(data: foodData[]): Observable<any> {
    const url = `${this.apiHost}/goods/pushFood`;
    const body: any = data;
    return this.http.post(url, body);
  }
}

export interface foodData {
  id?: number;
  introduce: string;
  foodName: string;
  price: number;
  number: number;
  food_Image: string;
  type: string;
  volume: string;
}
