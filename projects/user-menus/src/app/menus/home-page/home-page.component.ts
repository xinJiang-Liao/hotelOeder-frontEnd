import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  DATA = [
    {
      title: "Welcome To XX Hotel's High-End Restaurant",
      body: 'Develop a perfact taste for mastery',
    },
    {
      title: 'Cinder Sensing Cooker',
      body: 'Develop a perfact taste for mastery',
    },
    {
      title: 'The Most Mindful Dining Experience In The World',
      body: 'Let you have a comfortable dining experience is our service tenet',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
