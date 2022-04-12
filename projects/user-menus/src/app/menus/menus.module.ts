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
import { ChefsBannerComponent } from './chefs-banner/chefs-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FoodChoicesComponent } from './lib-component/food-choices/food-choices.component';
import { ChefProfileComponent } from './lib-component/chef-profile/chef-profile.component';
import { AboutDetailsComponent } from './lib-component/about-details/about-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { IconsProviderModule } from '@icons/icons-provider.module';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [
    MenusComponent,
    HomePageComponent,
    FoodsListComponent,
    ChefsBannerComponent,
    AboutUsComponent,
    FoodChoicesComponent,
    ChefProfileComponent,
    AboutDetailsComponent,
  ],
    imports: [
        CommonModule,
        MenusRoutingModule,
        NzCarouselModule,
        NzRadioModule,
        FormsModule,
        HammerModule,
        MatTabsModule,
        NzBreadCrumbModule,
        IconsProviderModule,
        NzDropDownModule,
    ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: SwiperHammerService,
    },
  ],
})
export class MenusModule {}
