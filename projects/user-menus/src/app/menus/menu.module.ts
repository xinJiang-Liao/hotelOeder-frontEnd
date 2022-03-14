import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, MenuRoutingModule],
  providers: [
    /**
     *为日期选择器配置时间地区
     * */
    { provide: MAT_DATE_LOCALE, useValue: 'zh-cn' },
    { provide: LOCALE_ID, useValue: 'zh-cn' },
  ],
})
export class MenuModule {}
