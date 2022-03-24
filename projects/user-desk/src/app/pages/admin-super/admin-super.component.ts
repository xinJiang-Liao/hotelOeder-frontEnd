import { Component, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { log } from 'ng-zorro-antd/core/logger';

@Component({
  selector: 'app-admin-super',
  templateUrl: './admin-super.component.html',
  styleUrls: ['./admin-super.component.scss'],
})
export class AdminSuperComponent /*implements OnInit*/ {
  public tag: string = '管理';
  @ViewChild('footer') public footer: any;
  public status: any;
  constructor() {
    /*通过订阅喝取消来结束对status的赋值*/
    const time: any = timer(1000, 2000);
    time.subscribe((x: any) => {
      if (this.footer?.status == 2) {
        this.status = 2;
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

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
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
