import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  id: number;
  name: string;
  jg: number;
  type: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public cd: any[] = [
    { id: 1, name: '肉眼牛排', jg: 128, type: '西餐' },
    { id: 24, name: '肉眼牛排', jg: 128, type: '西餐' },
    { id: 25, name: '肉眼牛排', jg: 128, type: '西餐' },
    { id: 26, name: '肉眼牛排', jg: 128, type: '西餐' },
    { id: 27, name: '肉眼牛排', jg: 128, type: '西餐' },

    { id: 23, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 28, name: '小鸡炖蘑菇', jg: 228, type: '中餐' },
    { id: 29, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 3, name: '小鸡炖蘑菇', jg: 328, type: '中餐' },
    { id: 30, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },

    { id: 4, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 5, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 6, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 7, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 8, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 1, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 0, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },
    { id: 11, name: '小鸡炖蘑菇', jg: 128, type: '中餐' },

    { id: 31, name: '红糖糍粑', jg: 38, type: '小吃' },
    { id: 32, name: '红糖糍粑', jg: 42, type: '小吃' },
    { id: 33, name: '红糖糍粑', jg: 13, type: '小吃' },
    { id: 35, name: '红糖糍粑', jg: 53, type: '小吃' },
    { id: 15, name: '红糖糍粑', jg: 53, type: '小吃' },

    { id: 37, name: '红糖糍粑', jg: 54, type: '小吃' },
    { id: 38, name: '红糖糍粑', jg: 23, type: '小吃' },
    { id: 39, name: '红糖糍粑', jg: 534, type: '小吃' },
    { id: 40, name: '红糖糍粑', jg: 56, type: '小吃' },
    { id: 41, name: '红糖糍粑', jg: 23, type: '小吃' },

    { id: 12, name: '满杯鲜橙', jg: 45, type: '饮品' },
    { id: 13, name: '满杯鲜橙', jg: 66, type: '饮品' },
    { id: 14, name: '满杯鲜橙', jg: 23, type: '饮品' },
    { id: 15, name: '满杯鲜橙', jg: 11, type: '饮品' },
    { id: 16, name: '满杯鲜橙', jg: 23, type: '饮品' },
    { id: 17, name: '满杯鲜橙', jg: 434, type: '饮品' },
    { id: 18, name: '满杯鲜橙', jg: 61, type: '饮品' },
    { id: 19, name: '满杯鲜橙', jg: 23, type: '饮品' },
    { id: 20, name: '满杯鲜橙', jg: 212, type: '饮品' },
    { id: 21, name: '满杯鲜橙', jg: 21, type: '饮品' },
    { id: 22, name: '满杯鲜橙', jg: 61, type: '饮品' },
  ];
  public xiCan: any = [];
  public zhongCan: any = [];
  public xiaoChi: any = [];
  public yinPin: any = [];

  public xC: any = [];
  public zC: any = [];
  public xiaoC: any = [];
  public yP: any = [];

  public value: any = '';

  constructor(public dialog: MatDialog) {}

  // public xc: any = this.deleteItem('西餐', '小吃');
  // /*根据输入的参数，删除响应的内容*/
  // deleteItem(LX: any, LX2: any) {
  //   // let a:any = this.cd.length
  //   for (let i = 0; i < 10; i++) {
  //     if (
  //       this.cd.findIndex((item) => item.lx == LX) == -1 &&
  //       this.cd.findIndex((item) => item.lx == LX2) == -1
  //     ) {
  //       break;
  //     } else {
  //       this.cd.splice(
  //         this.cd.findIndex((item) => item.lx == LX),
  //         1
  //       );
  //       this.cd.splice(
  //         this.cd.findIndex((item) => item.lx == LX2),
  //         1
  //       );
  //     }
  //   }
  //   // return this.cd
  // }

  openDialog(item: any): void {
    const dialogRef = this.dialog.open(NoteComponent, {
      width: '870px',
      height: '455px',
      data: item,
    });
    // 这里是输出animal到对应html的i标签中
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  ngOnInit(): void {
    this.xiCan = this.cd.filter((x: any) => {
      return x.type === '西餐';
    });
    this.zhongCan = this.cd.filter((x: any) => {
      return x.type === '中餐';
    });
    this.xiaoChi = this.cd.filter((x: any) => {
      return x.type === '小吃';
    });
    this.yinPin = this.cd.filter((x: any) => {
      return x.type === '饮品';
    });
    this.onChange();
    console.log(this.xC);
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
    @Inject(MAT_DIALOG_DATA) public date: DialogData
  ) {
    console.log(this.date);
  }

  public counter: number = 0;

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

  /*------------------------------------------------------*/
  // 监听鼠标点击 close（关闭）窗口
  onNoClick(): void {
    this.dialogRef.close();
  }
}
