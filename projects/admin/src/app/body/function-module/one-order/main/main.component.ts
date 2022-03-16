import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  name: string;
  jg: string;
  type: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public cd: any[] = [
    { id: '0001', name: '肉眼牛排', jg: '￥128', type: '西餐' },
    { id: '0002', name: '肉眼牛排', jg: '￥128', type: '西餐' },
    { id: '0003', name: '肉眼牛排', jg: '￥128', type: '西餐' },
    { id: '0004', name: '肉眼牛排', jg: '￥128', type: '西餐' },
    { id: '0005', name: '肉眼牛排', jg: '￥128', type: '西餐' },

    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '00011', name: '小鸡炖蘑菇', jg: '￥228', type: '中餐' },
    { id: '00011', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥328', type: '中餐' },
    { id: '00014', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },

    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },
    { id: '0001', name: '小鸡炖蘑菇', jg: '￥128', type: '中餐' },

    { id: '0006', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0002', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0003', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0004', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0005', name: '红糖糍粑', jg: '￥38', type: '小吃' },

    { id: '0004', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0005', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0006', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0007', name: '红糖糍粑', jg: '￥38', type: '小吃' },
    { id: '0008', name: '红糖糍粑', jg: '￥38', type: '小吃' },

    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
    { id: '0001', name: '满杯鲜橙', jg: '￥38', type: '饮品' },
  ];
  public xiCan: any = [];
  public zhongCan: any = [];
  public xiaoChi: any = [];
  public yinPin: any = [];

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

  tiles: Tile[] = [
    { text: '7', cols: 1, rows: 1, color: '#faffff' },
    { text: '8', cols: 1, rows: 1, color: '#faffff' },
    { text: '9', cols: 1, rows: 1, color: '#faffff' },
    { text: '重置', cols: 1, rows: 1, color: '#faffff' },

    { text: '4', cols: 1, rows: 1, color: '#faffff' },
    { text: '5', cols: 1, rows: 1, color: '#faffff' },
    { text: '6', cols: 1, rows: 1, color: '#faffff' },
    { text: '✓', cols: 1, rows: 3, color: '#faffff' },

    { text: '1', cols: 1, rows: 1, color: '#faffff' },
    { text: '2', cols: 1, rows: 1, color: '#faffff' },
    { text: '3', cols: 1, rows: 1, color: '#faffff' },

    { text: '0', cols: 3, rows: 1, color: '#faffff' },
  ];

  /*--------这里是键盘区域与数量显示的点击函数与方法-------*/
  clickNumber(a: any = 0) {
    // console.log('sum1='+ a)
    /*Number()-----强制将非数字类型的数字转换成数字类型*/
    if (a == '重置') {
      this.counter = 0;
    } else if (a == '✓') {
      /*这里可以添加一个提交方法。点击'✓'就将信息完成提交*/
    } else if (0 < this.counter && this.counter < 10) {
      this.counter = 10 * this.counter + Number(a);
    } else {
      this.counter = Number(a);
    }
    // console.log('sum2='+ this.counter)
    return this.counter;
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
  /*如何*/

  /*------------------------------------------------------*/
  // 监听鼠标点击 close（关闭）窗口
  onNoClick(): void {
    this.dialogRef.close();
  }
}
