import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@service/config.service';
import { Observable } from 'rxjs';
import { httpOptions2 } from '@service/_utils';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private apiHost: string | null;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiHost = this.config.get('apiHost');
    if (!this.apiHost) {
      this.apiHost = '';
    }
  }

  // public get(hotelId: number): Observable<any> {
  //   const url = `${this.apiHost}/api/jinkeh/parking/token/get`;
  //   const body: any = { hotelId: hotelId };
  //   return this.http.get(url, httpOptions2(body));
  // }
  //
  // public update(hotelId: number): Observable<any> {
  //   const url = `${this.apiHost}/api/jinkeh/parking/token/update`;
  //   const body: any = { hotelId: hotelId };
  //   return this.http.post(url, body);
  // }
}
