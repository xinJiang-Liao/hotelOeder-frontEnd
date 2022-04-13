import { Component, OnInit } from '@angular/core';
import { AdminService } from '@service/admin.service';

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
  public datasource?: any;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService
      .getCommon(1)
      .subscribe((response: any) => {
        console.log(response);
        this.datasource = response;
      });
  }
}
