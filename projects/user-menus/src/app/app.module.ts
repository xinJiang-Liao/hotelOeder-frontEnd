import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { APP_BASE_HREF } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimations,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/user/menus/' },
    /**
     *为日期选择器配置时间地区
     *
     * */
    { provide: MAT_DATE_LOCALE, useValue: 'zh-cn' },
    { provide: LOCALE_ID, useValue: 'zh-cn' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
