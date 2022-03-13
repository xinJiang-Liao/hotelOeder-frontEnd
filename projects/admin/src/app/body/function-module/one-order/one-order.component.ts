import { Component, OnInit } from '@angular/core';
import { ManuService } from '../../../../../../lib-services/src/lib/manu.service';

@Component({
  selector: 'app-one-order',
  templateUrl: './one-order.component.html',
  styleUrls: ['./one-order.component.css'],
})
export class OneOrderComponent implements OnInit {
  constructor(public menuSrvice: ManuService) {}

  ngOnInit(): void {}

  onclick() {
    this.menuSrvice.menu().subscribe(
      (x: any) => {
        console.log('1111111111', x);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
