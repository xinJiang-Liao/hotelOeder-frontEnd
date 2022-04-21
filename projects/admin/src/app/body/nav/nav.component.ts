import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { goto } from '@service/_utils';
import { AdminService } from '@service/admin.service';
import { OrderService } from '@service/order.service';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  today = Date.now();
  DataTime = '';
  DataTime2 = '';
  public user: any;
  public sum:number = 0;

  constructor(
    public adminService: AdminService,
    public orderService: OrderService
  ) {
    let username = sessionStorage.getItem('adminID');
    if (username) {
      this.adminService.getCommon(0, username).subscribe((response: any) => {
        this.user = response;
        console.log(this.user);
      });
    }

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

  ngOnInit(): void {
    let a = moment().startOf('days').format('YYYY-MM-DD HH:mm:ss');
    let b = moment().endOf('days').format('YYYY-MM-DD HH:mm:ss');
    setTimeout(()=>{
      this.orderService.getOrders('', a, b).subscribe((response: any) => {
        this.sum = 0;
        response.map((x: any) => {
          this.sum = this.sum + x.payment_amount;
        });
      });
    },60000)

  }
}
