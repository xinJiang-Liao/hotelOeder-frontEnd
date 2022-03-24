import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-super',
  templateUrl: './admin-super.component.html',
  styleUrls: ['./admin-super.component.scss'],
})
export class AdminSuperComponent /*implements OnInit*/ {
  public tag: string = '管理';
  constructor() {}

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