import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent /*implements OnInit*/ {
  isCollapsed = false;

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
        })
        .then((r) => {
          console.log('还么有登录');
          this.message.create('error', '还未登录，请先登录！');
        });
    }
  }
}
