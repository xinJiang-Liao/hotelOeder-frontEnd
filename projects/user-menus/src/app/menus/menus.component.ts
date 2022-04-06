import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  /*将组件实例化，使其官方提供的方法可被调用*/
  @ViewChild('Carousel') Carousel?: any;

  slideCount = 0;
  sliderTransformStyle = '';
  private activeSlide = 0;

  constructor() {}

  /*判断滚动方向，进行对应方法的调用*/
  wheel(event?: any) {
    if (event.deltaY > 0) {
      this.Carousel.next();
    } else {
      this.Carousel.pre();
    }
  }

  ngOnInit(): void {}

  /*触发收拾进行事件处理*/
  public onpan(e: any) {
    const percentage = ((100 / this.slideCount) * e.deltaY) / screen.height;
    const transformPercentage =
      percentage - (100 / this.slideCount) * this.activeSlide;
    this.sliderTransformStyle = 'translateY( ' + transformPercentage + '% )';

    if (e.isFinal) {
      if (e.velocityY > 1) {
        this.Carousel.pre();
      } else if (e.velocityY < -1) {
        this.Carousel.next();
      }
    }
  }
}
