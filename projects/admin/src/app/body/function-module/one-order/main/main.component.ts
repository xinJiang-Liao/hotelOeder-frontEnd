import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ManuService } from '@service/manu.service';
import { OrderCartService } from '@service/order-cart.service';

export interface DialogData {
  id: number;
  introduce: string;
  foodName: string;
  price: number;
  number: number;
  food_Image: string;
  type: string;
  volume: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public datasroce: any[] = [];

  public xiCan: any = [];
  public zhongCan: any = [];
  public xiaoChi: any = [];
  public yinPin: any = [];

  public value: any = '';

  public xC: any = [];
  public zC: any = [];
  public xiaoC: any = [];
  public yP: any = [];

  constructor(
    public dialog: MatDialog,
    private manuService: ManuService,
    public orderCartService: OrderCartService
  ) {}

  ngOnInit(): void {
    this.manuService.getFoods().subscribe((response: any) => {
      this.datasroce = response;
      console.log(this.datasroce);
      if (this.datasroce) {
        this.xiCan = this.datasroce.filter((x: any) => {
          return x.type === '西餐';
        });
        this.zhongCan = this.datasroce.filter((x: any) => {
          return x.type === '中餐';
        });
        this.xiaoChi = this.datasroce.filter((x: any) => {
          return x.type === '小吃';
        });
        this.yinPin = this.datasroce.filter((x: any) => {
          return x.type === '饮品';
        });
      }
      this.onChange();
    });
  }

  onChange(event?: any) {
    if (this.value == '') {
      this.xC = this.xiCan;
      this.zC = this.zhongCan;
      this.xiaoC = this.xiaoChi;
      this.yP = this.yinPin;
    } else {
      this.xC = this.xiCan.filter((x: any) => {
        return x.id === Number(this.value);
      });
      this.zC = this.zhongCan.filter((x: any) => {
        return x.id === Number(this.value);
      });
      this.xiaoC = this.xiaoChi.filter((x: any) => {
        return x.id === Number(this.value);
      });
      this.yP = this.yinPin.filter((x: any) => {
        return x.id === Number(this.value);
      });
    }
  }

  public foodsItem: any = [];

  openDialog(item: any): void {
    const dialogRef = this.dialog.open(NoteComponent, {
      width: '870px',
      height: '455px',
      data: item,
    });
    // t弹窗关闭后返回弹窗中的data到父级中，通过订阅获取
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.foodsItem = this.foodsItem.concat([result]);
      }
      this.orderCartService.FoodsEventer.emit(this.foodsItem);
      console.log(this.foodsItem);
    });
  }
}

/*-----这里是弹窗的ts----------------------------------------------------------*/

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'Note.component',
  templateUrl: './Note.component.html',
  styleUrls: ['./main.component.scss'],
})
export class NoteComponent {
  constructor(
    public dialogRef: MatDialogRef<NoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(this.data);
  }

  public counter: number = 1;

  onCounter1(): void {
    this.counter = this.counter + 1;
    // console.log(this.counter)
  }

  onCounter2(): void {
    if (this.counter > 1) {
      this.counter = this.counter - 1;
    } else {
      this.counter = this.counter;
    }
    // console.log(this.counter)
  }

  onClick() {
    // let foodData = { ...this.data };
    return {
      type: this.data.type,
      foodName: this.data.foodName,
      volume: this.data.volume,
      number: this.counter,
      price: this.data.price,
    };
  }

  /*------------------------------------------------------*/
  // 监听鼠标点击 close（关闭）窗口
  onNoClick(): void {
    this.dialogRef.close();
  }
}
