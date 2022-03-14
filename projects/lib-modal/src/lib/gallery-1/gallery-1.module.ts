import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gallery1Component } from './gallery-1.component';
import { Gallery1Service } from './gallery-1.service';

import { SwiperHammerModule } from '../../../../lib-component/src/lib/swiper-hammer/swiper-hammer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [Gallery1Component],
  imports: [
    CommonModule,
    SwiperHammerModule,
    FontAwesomeModule,
    SwiperHammerModule,
    SwiperHammerModule,
  ],
  exports: [Gallery1Component],
})
export class Gallery1Module {
  static forRoot(): ModuleWithProviders<Gallery1Module> {
    return {
      ngModule: Gallery1Module,
      providers: [Gallery1Service],
    };
  }
}
