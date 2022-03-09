import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  name: string;
  number: number;
  price: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: '西冷牛排', number: 1, price: '￥128' },
  { name: '北京烤鸭', number: 1, price: '￥68' },
  { name: '蒸鹿茸', number: 1, price: '￥228' },
  { name: '蒸白糕', number: 2, price: '￥26' },
  { name: '意大利面', number: 1, price: '￥36' },
  { name: '西瓜汁', number: 2, price: '￥40' },
  { name: '惠灵顿牛排', number: 1, price: '￥88' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'number', 'price'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
