import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.scss'],
})
export class FoodsListComponent implements OnInit {
  public screen: boolean = false;

  constructor() {
    if (window.screen.width > 1024) {
      this.screen = !this.screen;
    }
  }

  ngOnInit(): void {}
}
