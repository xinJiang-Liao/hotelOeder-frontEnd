import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SwiperHammerComponent } from './swiper-hammer.component';
import { SwiperHammerService } from './swiper-hammer.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SwiperHammerComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SwiperHammerComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: SwiperHammerService,
    },
  ],
})
export class SwiperHammerModule {}
