import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

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

  // public menu2(order?: any): Observable<any> {
  //   const url = `${this.apiHost}/event`;
  //   const body = order;
  //   return this.http.get(url, body);
  // }

  public menu(): Observable<any> {
    const url = `${this.apiHost}/`;
    return this.http.get(url);
  }
}
