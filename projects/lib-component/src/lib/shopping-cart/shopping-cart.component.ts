import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {

}

export interface DialogData2 {

}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(YHComponent, {
      /*date可以写在这里*/
      width:'600px',
      height:'200px',
      data:'扫描会员码进行登陆',
    });
  }

  openDialog2() {
    this.dialog.open(YHQComponent, {
      /*date可以写在这里*/
      width:'600px',
      height:'200px',
      data:'扫描优惠券进行抵扣优惠',
    });
  }

  ngOnInit(): void {
  }

}






@Component({
  selector: 'YH.component',
  templateUrl: './YH.component.html',
})
export class YHComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
}

@Component({
  selector: 'YHQ',
  templateUrl: './YHQ.html',
})
export class YHQComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData2) {

  }
}
