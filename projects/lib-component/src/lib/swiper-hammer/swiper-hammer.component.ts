import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MAT_ICON_OPTIONS } from '../../../../lib-services/src/lib/_data';

enum PAGINATION_TYPE {
  hammer = 'hammer',
  swiper = 'swiper',
}

enum PAGINATION_COLOR {
  hammer = '#868e96',
  swiper = '#fff',
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'lib-swiper-hammer',
  templateUrl: './swiper-hammer.component.html',
  styleUrls: ['./swiper-hammer.component.scss'],
})
export class SwiperHammerComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input() autoPlay = 0;
  @Input() initIndex = 0;
  @Input() pagination: { type: string; color?: string } = { type: PAGINATION_TYPE.hammer };

  @Input() set count(count: number) {
    if (count > 0 && this.sliderWrapper) this.setSlides(count);
  }

  @Output() slided = new EventEmitter();

  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;

  slides: number[] = [];
  sliderTransformStyle = '';
  isAnimating = false;
  slideCount = 0;
  isTouchDevice = false;
  width = 0;

  private activeSlide = 0;
  private sensitivity = 10;
  private animatingTimeout: any;
  private subscription?: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace(
      'fa',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/fa-arrow.svg'),
      MAT_ICON_OPTIONS,
    );
  }

  ngOnInit(): void {
    this.isTouchDevice = 'ontouchstart' in window;
    if (!this.pagination.color) {
      this.pagination.color = PAGINATION_COLOR[this.pagination.type as PAGINATION_TYPE];
    }
    // console.log(this.pagination);
    // this.isTouchDevice = false;
  }

  ngAfterViewInit(): void {
    this.setSlides();
    if (this.initIndex) this.goToSlide(this.initIndex, true);
    this.startAutoPlay();
  }

  ngAfterViewChecked(): void {
    const sliderWrapperElement = this.sliderWrapper.nativeElement as HTMLElement;
    if (sliderWrapperElement.offsetWidth === this.width) return;

    this.width = sliderWrapperElement.offsetWidth;
    this.sensitivity = this.width / 20;
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  public onpan(e: any) {
    // if (e.velocityX === 0 || Math.abs(e.velocityY) > Math.abs(e.velocityX)) {
    //   // Vertical scroll
    //   return;
    // }
    const percentage = ((100 / this.slideCount) * e.deltaX) / screen.width;
    const transformPercentage = percentage - (100 / this.slideCount) * this.activeSlide;
    this.sliderTransformStyle = 'translateX( ' + transformPercentage + '% )';

    if (e.isFinal) {
      if (e.velocityX > 1) {
        this.goToSlide(this.activeSlide - 1);
      } else if (e.velocityX < -1) {
        this.goToSlide(this.activeSlide + 1);
      } else {
        if (percentage <= -(this.sensitivity / this.slideCount)) {
          this.goToSlide(this.activeSlide + 1);
        } else if (percentage >= this.sensitivity / this.slideCount) {
          this.goToSlide(this.activeSlide - 1);
        } else {
          this.goToSlide(this.activeSlide);
        }
      }
    }
  }

  public previousSlide() {
    this.stopAutoPlay();

    const slideIndex = this.activeSlide - 1;
    if (slideIndex < 0) {
      this.goToSlide(this.slideCount - 1);
    } else {
      this.goToSlide(slideIndex);
    }

    this.startAutoPlay();
  }

  public nextSlide() {
    this.stopAutoPlay();

    const slideIndex = this.activeSlide + 1;
    if (slideIndex === this.slideCount) {
      this.goToSlide(0);
    } else {
      this.goToSlide(slideIndex);
    }

    this.startAutoPlay();
  }

  public goToSlide(slideNumber: number, noAnimation?: boolean) {
    this.stopAutoPlay();

    if (slideNumber < 0) {
      this.activeSlide = 0;
    } else if (slideNumber > this.slideCount - 1) {
      this.activeSlide = this.slideCount - 1;
    } else {
      this.activeSlide = slideNumber;
    }

    if (!noAnimation) this.isAnimating = true;
    const percentage = -(100 / this.slideCount) * this.activeSlide;
    this.sliderTransformStyle = 'translateX(' + percentage + '%)';
    clearTimeout(this.animatingTimeout);
    this.animatingTimeout = setTimeout(() => (this.isAnimating = false), 400);

    this.startAutoPlay();
    this.slided.emit(this.activeSlide);
  }

  public isActive(index: number) {
    return this.activeSlide === index;
  }

  public getActiveSlideIndex(): number {
    return this.activeSlide;
  }

  private startAutoPlay(): void {
    if (this.autoPlay > 0 && !this.subscription) {
      this.subscription = timer(this.autoPlay, this.autoPlay).subscribe(() => this.nextSlide());
    }
  }

  private stopAutoPlay(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

  private setSlides(count?: number): void {
    if (count !== undefined) {
      this.slideCount = count;
      this.slides = [].constructor(count);
    } else if (this.sliderWrapper) {
      const slides = this.sliderWrapper.nativeElement.querySelectorAll('.slider-panel');
      // const slides = document.querySelectorAll('.slider-panel');
      this.slideCount = slides.length;
      this.slides = [].constructor(this.slideCount);
    }
  }
}
