import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { SwiperHammerService } from './swiper-hammer.service';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MenusComponent, HomePageComponent, FoodsListComponent],
  imports: [
    CommonModule,
    MenusRoutingModule,
    NzCarouselModule,
    NzRadioModule,
    FormsModule,
    HammerModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: SwiperHammerService,
    },
  ],
})
export class MenusModule {}
