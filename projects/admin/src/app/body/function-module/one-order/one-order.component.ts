import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-one-order',
  templateUrl: './one-order.component.html',
  styleUrls: ['./one-order.component.css'],
})
export class OneOrderComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService
  ) {
    let a = sessionStorage.getItem('user');

    if (a !== 'admin123456') {
      this.router
        .navigate(['/login'], {
          relativeTo: this.activatedRoute,
          queryParams: { type: 'common' },
        })
        .then((r) => {
          console.log('还么有登录');
          this.message.create('error', '还未登录，请先登录！');
        });
    }
  }

  ngOnInit(): void {}
}
