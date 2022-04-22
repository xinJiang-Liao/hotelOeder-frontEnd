import { Component, Inject, OnInit } from '@angular/core';
import { ManuService } from '@service/manu.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface DialogData {}

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.scss'],
})
export class FoodsListComponent implements OnInit {
  public screen: boolean = true;
  public foodData: any;

  constructor(public manuService: ManuService, public dialog: MatDialog) {
    if (window.screen.width > 1024) {
      this.screen = !this.screen;
    }
  }

  ngOnInit(): void {
    this.manuService.getFoods().subscribe((respones: any) => {
      console.log(respones);
      this.foodData = respones.slice(0, 6);
      console.log(this.foodData);
    });
  }

  // openDialog(price?: number, open?: boolean) {
  //   const dialogRef = this.dialog.open(FoodDetailComponent, {
  //     /*date可以写在这里*/
  //     data: '',
  //   });
  //   // t弹窗关闭后返回弹窗中的data到父级中，通过订阅获取
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     // console.log(result);
  //   });
  // }

  isVisible = false;
  isOkLoading = false;
  food:any

  showModal(data:any): void {
    this.food = data
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}



/*此弹窗暂时弃用*/
@Component({
  selector: 'food-details',
  templateUrl: 'foodDetails.component.html',
})
export class FoodDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  onClick(event: any) {
    event.stopPropagation();
    // let foodData = { ...this.data };
    console.log(11111111111);
  }

}
