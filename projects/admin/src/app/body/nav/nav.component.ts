import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { goto } from '@service/_utils';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  today = Date.now();
  DataTime = '';
  DataTime2 = '';

  constructor() {
    setInterval(() => {
      this.DataTime = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US');
    }, 1000);

    setInterval(() => {
      this.DataTime2 = formatDate(Date.now(), 'HH:mm:ss', 'en-US');
    }, 1000);
  }

  exit() {
    sessionStorage.removeItem('user');
    const link = '/login?type=common';
    goto(`${window.location.origin}${link}`);
  }

  ngOnInit(): void {}
}
