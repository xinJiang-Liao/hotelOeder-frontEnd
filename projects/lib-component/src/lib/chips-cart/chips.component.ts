import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface fl {
  name: string;
}

export interface sd {
  name: string;
}

export interface kw {
  name: string;
}

export interface qt {
  name: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent implements OnInit {
  FL: fl[] = [{ name: '小份' }, { name: '中份' }, { name: '大份' }];
  // drop(event: CdkDragDrop<fl[]>) {
  //   moveItemInArray(this.FL, event.previousIndex, event.currentIndex);
  // }

  SD: sd[] = [
    { name: '三分熟' },
    { name: '五分熟' },
    { name: '七分熟' },
    { name: '全熟' },
  ];
  // drop1(event: CdkDragDrop<sd[]>) {
  //   moveItemInArray(this.SD, event.previousIndex, event.currentIndex);
  // }

  KW: kw[] = [{ name: '芝士味' }, { name: '黑胡椒味' }, { name: '椒盐味' }];
  // drop1(event: CdkDragDrop<sd[]>) {
  //   moveItemInArray(this.SD, event.previousIndex, event.currentIndex);
  // }

  QT: qt[] = [{ name: '加xx' }, { name: '加xxx' }, { name: '加xxxx' }];
  // drop1(event: CdkDragDrop<sd[]>) {
  //   moveItemInArray(this.SD, event.previousIndex, event.currentIndex);
  // }

  constructor() {}

  ngOnInit(): void {}
}
