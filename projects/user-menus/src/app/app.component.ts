import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '菜单';
  isCollapsed = true;
  public phone: string = '';

  constructor(
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe((x: any) => {
      let position = x.position;
      let desk_code = x.desk_code;
      sessionStorage.setItem(
        'site_code',
        JSON.stringify({ position, desk_code })
      );
    });
    setTimeout(() => {
      let phone: any;
      phone = localStorage.getItem('loginMenus');
      if (!phone) {
        this.showModal();
      }
    }, 1000);
  }

  /*------------------------对话框----------------------------*/
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(req: any): void {
    let isphone = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    if (isphone.test(req)) {
      localStorage.setItem('loginMenus', req);
      this.isOkLoading = true;
      setTimeout(() => {
        this.isVisible = false;
        this.isOkLoading = false;
      }, 800);
    } else {
      this.message.create('error', '请输入正确手机号');
    }
  }

  // handleCancel(): void {
  //   this.isVisible = false;
  // }
  /*------------------------对话框----------------------------*/
}
