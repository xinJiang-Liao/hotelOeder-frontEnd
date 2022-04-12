import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-choices',
  templateUrl: './food-choices.component.html',
  styleUrls: ['./food-choices.component.scss']
})
export class FoodChoicesComponent implements OnInit {
  public screen: boolean = false;

  constructor() {
    if (window.screen.width > 1024) {
      this.screen = !this.screen;
    }
  }

  ngOnInit(): void {
  }

}
