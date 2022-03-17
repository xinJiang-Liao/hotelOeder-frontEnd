import { Component, Input, OnInit } from '@angular/core';
import { group } from '@angular/animations';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css'],
})
export class ButtonToggleComponent implements OnInit {
  @Input() date: any;
  public bz: any = {
    a: '',
    b: '',
    c: '',
  };
  constructor() {
    // console.log('输出：'+this.date)
  }

  onclick(value: any) {
    console.log(value);
  }

  ngOnInit(): void {}
}
