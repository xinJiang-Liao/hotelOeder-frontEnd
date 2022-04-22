import {Component, Input, OnInit} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss'],
})
export class DragComponent implements OnInit {
  @Input() foodData:any
  public dragName: any = 'drag';
  public parentNode: any;
  public pHeight: any;
  public pWidth: any;
  constructor() {}

  ngOnInit(): void {
    this.drag(this.dragName);
  }

  public onClick() {
    // window.location.href = 'tel:4001682006';
  }

  // 参数说明：
  // 元素绝对定位，父级相对定位，如果父级为window，则可以不用
  // 传一个参数，表示父级为window，物体相对于window范围拖动
  // 传2个参数，则父级为第二个参数，物体相对于父级范围拖动
  // 参数为id值
  drag(obj1: any, parentNode1?: any) {
    const self = this;
    const obj = document.getElementById(obj1);
    let pWidth: any;
    let pHeight: any;
    if (arguments.length == 1) {
      this.parentNode = window.self;
      pWidth = this.parentNode.innerWidth;
      pHeight = this.parentNode.innerHeight;
    } else {
      this.parentNode = document.getElementById(parentNode1);
      pWidth = this.parentNode.clientWidth;
      pHeight = this.parentNode.clientHeight;
    }
    obj?.addEventListener('touchstart', function (event: any) {
      //当只有一个手指时              .
      // if (event.touches.length == 1) {
      //   //禁止浏览器默认事
      //   // event.preventDefault();
      // }

      const touch = event.targetTouches[0];
      const disX = touch.clientX - obj.offsetLeft;
      const disY = touch.clientY - obj.offsetTop;
      const oWidth = obj.offsetWidth;
      const oHeight = obj.offsetHeight;

      obj.addEventListener('click', self.onClick);

      obj.addEventListener('touchmove', function (event: any) {
        /* 拖动时触发阻止浏览器默认事件的函数，preventDefault() */
        event.preventDefault();

        const touch = event.targetTouches[0];
        obj.style.left = touch.clientX - disX + 'px';
        obj.style.top = touch.clientY - disY + 'px';
        //左侧
        if (obj.offsetLeft <= 0) {
          obj.style.left = 0 + 'px';
        }
        //右侧
        if (obj.offsetLeft >= pWidth - oWidth) {
          obj.style.left = pWidth - oWidth + 'px';
        }
        //上面
        if (obj.offsetTop <= 0) {
          obj.style.top = 0 + 'px';
        }
        //下面
        if (obj.offsetTop >= pHeight - oHeight) {
          obj.style.top = pHeight - oHeight + 'px';
        }
      });
      obj.addEventListener('touchend', function (event: any) {
        // removeEventListener用来移除对应事件监听，可执行外部函数，无法执行内部函数
        // obj.removeEventListener('touchmove', function (event: any) {});
        obj.removeEventListener('touchmove', function (event: any) {
          /* 结束触摸时触发取消阻止浏览器默认事件，取消preventDefault() */
          event.preventDefault();
        });
        /*结束触摸，移除点击事件*/
        timer(500, 500).subscribe((next: any) => {
          obj.removeEventListener('click', self.onClick);
        });
      });
    });
  }
}
