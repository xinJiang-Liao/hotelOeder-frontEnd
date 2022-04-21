import { Component, OnInit } from '@angular/core';
import {ChefsService} from '@service/chefs.service';

@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.component.html',
  styleUrls: ['./chef-profile.component.scss']
})
export class ChefProfileComponent implements OnInit {
  public chefsData: any;
  constructor(public chefsService: ChefsService) {}

  ngOnInit(): void {
    this.chefsService.getChefs().subscribe((response: any) => {
      this.chefsData = response;
      console.log(this.chefsData);
    });
  }
}
