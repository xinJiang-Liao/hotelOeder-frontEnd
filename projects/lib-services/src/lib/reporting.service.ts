import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { httpOptions2 } from './_utils';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  private apiHost: string | null;

  constructor(private http: HttpClient,
              private config: ConfigService) {
    this.apiHost = this.config.get('apiHost');
    if (!this.apiHost) {
      this.apiHost = '';
    }
  }

  public app(error: any, type?: string, user?: any): void {
    const feedback = {
      feedback: JSON.stringify(error),
      contact_name: user?.name,
      contact_method: user?.phone,
      type0: 'app',
      type: type || '自动反馈错误',
      Images: null
    };
    this.feedback(feedback).subscribe(response => console.log(response), err => console.log(err));
  }

  public feedback(feedback: any, query?: any): Observable<any> {
    // feedback = {
    //   "feedback": "反馈信息",
    //   "contact_name": "联系名",
    //   "contact_method": "联系方式"
    //   "type": "类型"
    //   "Images": [12,322,33]
    // }

    // query = {
    //   startAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    //   endAt: moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
    //   limit: 100
    //   offset: 0
    // }

    if (feedback) {
      const url = `${this.apiHost}/api/external/feedbacks`;
      return this.http.post(url, feedback);
    }
    if (query) {
      const url = `${this.apiHost}/api/feedbacks`;
      return this.http.get(url, httpOptions2(query));
    }
    return throwError({message: 'at lease one parameter of feedback or query'});
  }

}
