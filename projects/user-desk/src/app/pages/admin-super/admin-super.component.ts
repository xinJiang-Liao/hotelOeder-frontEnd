import { Component, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-super',
  templateUrl: './admin-super.component.html',
  styleUrls: ['./admin-super.component.scss'],
})
export class AdminSuperComponent /*implements OnInit*/ {
  public tag: string = 'super';
  @ViewChild('footer') public footer: any;
  public status: any;
  constructor(public message: NzMessageService) {
    /*通过订阅喝取消来结束对status的赋值*/
    const time: any = timer(1000, 1000);
    time.subscribe((x: any) => {
      if (this.footer?.status == 2) {
        this.status = 2;
        this.current += 1;
        this.changeContent();
      }
    });
    if (this.status === 2) {
      time.unsubscribe();
    }
    /*----------------------------------*/
  }

  // ngOnInit(): void {}

  current = 0;

  index = 'First-content';

  // 返回上一页
  pre(event?: any): void {
    this.current -= 1;
    this.status -= 1;
    this.footer.status -= 1;
    this.changeContent();
  }

  next(): void {
    if (this.status == 2) {
      this.current += 1;
      this.changeContent();
    } else {
      this.message.create('warning', '您还未登录!');
    }
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
}
