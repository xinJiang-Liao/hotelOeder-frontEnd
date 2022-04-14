import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { httpOptions2 } from '@service/_utils';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public apiHost = '';
  //
  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiHost = this.config.get();
    if (!this.apiHost) {
      this.apiHost = '';
    }
  }

  /*管理员登录验证接口*/
  /*返回值：
   * code?：1 or 0
   * status:true or false
   * */
  public login(username: string, password: string): Observable<any> {
    const url = `${this.apiHost}/admin`;
    const body: any = { username: username, password: password };
    return this.http.post(url, body);
  }

  /*普通管理员信息获取*/
  /*返回值：
   * 一个或多个管理员的信息
   * 参数：
   * username?:要查找的用户名
   * all?:true
   * */
  public getCommon(all?: number, username?: string): Observable<any> {
    const url = `${this.apiHost}/admin/common`;
    const params = { all: all, username: username };
    return this.http.get(url, httpOptions2(params));
  }

  /*超级管理员信息获取*/
  /*返回值：
   * 超级管理员的全部信息
   * 无参数
   * */
  public getSuper(): Observable<any> {
    const url = `${this.apiHost}/admin/super`;
    return this.http.get(url);
  }

  /*修改 管理员信息*/
  public upDate(id: number, isSuper: number, data: any): Observable<any> {
    const url = `${this.apiHost}/admin/upDate`;
    const body: any = { id: id, isSuper: isSuper, data: data };
    return this.http.post(url, body);
  }

  /*删除 指定username的管理员*/
  public deleteAdmin(data: any): Observable<any> {
    const url = `${this.apiHost}/admin/DelAdmin`;
    const body: any = data;
    return this.http.post(url, body);
  }

  /*添加 普通管理员*/
  public pushAdmin(data: any): Observable<any> {
    const url = `${this.apiHost}/admin/pushAdmin`;
    const body: any = data;
    return this.http.post(url, body);
  }
}
