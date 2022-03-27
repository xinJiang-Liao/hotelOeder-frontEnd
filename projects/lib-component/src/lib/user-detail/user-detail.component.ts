import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Output() pre = new EventEmitter<string>();
  @Input() tag: any;

  public abstract: string =
    '这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介';

  constructor() {}

  ngOnInit(): void {}

  /*output广播触发父级的pre方法，含义：返回登录界面*/
  exid() {
    this.pre.emit();
  }

  /**------------------------------------------信息修改抽屉弹窗--------------------------------------------------*/
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
