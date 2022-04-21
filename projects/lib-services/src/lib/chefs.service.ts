import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@service/config.service';
import { Observable } from 'rxjs';
// import { httpOptions2 } from './_utils';

@Injectable({
  providedIn: 'root',
})
export class ChefsService {
  private apiHost: string | null;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiHost = this.config.get('apiHost');
    if (!this.apiHost) {
      this.apiHost = '';
    }
  }

  /*获取 所有订单*/
  public getChefs(): Observable<any> {
    const url = `${this.apiHost}/chefs/event`;
    return this.http.get(url);
  }
}
