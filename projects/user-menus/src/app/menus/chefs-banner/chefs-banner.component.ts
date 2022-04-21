import { Component, OnInit } from '@angular/core';
import { ChefsService } from '@service/chefs.service';

@Component({
  selector: 'app-chefs-banner',
  templateUrl: './chefs-banner.component.html',
  styleUrls: ['./chefs-banner.component.scss'],
})
export class ChefsBannerComponent implements OnInit {
  public chefsData: any;
  constructor(public chefsService: ChefsService) {}

  ngOnInit(): void {
    this.chefsService.getChefs().subscribe((response: any) => {
      this.chefsData = response;
      console.log(this.chefsData);
    });
  }
}
