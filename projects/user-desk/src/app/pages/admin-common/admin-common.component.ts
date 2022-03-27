import { Component, OnInit } from '@angular/core';

interface ItemData {
  gender: string;
  name: Name;
  email: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

@Component({
  selector: 'app-admin-common',
  templateUrl: './admin-common.component.html',
  styleUrls: ['./admin-common.component.scss'],
})
export class AdminCommonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
