import { Component, OnInit } from '@angular/core';
import {ManuService} from '@service/manu.service';



@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.scss'],
})
export class FoodsListComponent implements OnInit {
  public screen: boolean = true;

  constructor(public manuService:ManuService) {
    if (window.screen.width > 1024) {
      this.screen = !this.screen;
    }
  }

  ngOnInit(): void {
    this.manuService.menu().subscribe((respones:any) =>{
      console.log(respones)
    })
  }
}
