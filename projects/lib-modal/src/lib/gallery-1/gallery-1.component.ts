import { Component, OnInit, ViewChild } from '@angular/core';
import { Gallery1Service } from '@modal/gallery-1/gallery-1.service';
import { SwiperHammerComponent } from '@component/swiper-hammer/swiper-hammer.component';
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'modal-gallery1',
  templateUrl: './gallery-1.component.html',
  styleUrls: ['./gallery-1.component.scss'],
})
export class Gallery1Component implements OnInit {
  @ViewChild('swiper', { static: true }) swiper!: SwiperHammerComponent;

  public show: boolean = false;
  public images: any[] = [];
  public index: number = 0;

  public faTimes = faTimes;
  public faTrashAlt = faTrashAlt;

  private service: Gallery1Service | undefined;

  constructor() {}

  ngOnInit(): void {}

  public setImages(images: any[], index?: number) {
    this.images = images;
    this.swiper.slideCount = this.images.length;
    this.swiper.goToSlide(index || 0);
    this.index = index || 0;
  }

  // public gotoIndex(index: number): void {
  //   this.swiper.goToSlide(index);
  // }

  public setService(service: Gallery1Service): void {
    this.service = service;
  }

  public onclose(event?: any) {
    if (this.service) {
      this.service.hide();
      this.service = undefined;
    }
  }

  public onremove(event?: any) {
    const index = this.swiper.getActiveSlideIndex();
    this.images.splice(index, 1);
    this.swiper.slideCount = this.images.length;
    this.swiper.goToSlide(index);
  }
}
