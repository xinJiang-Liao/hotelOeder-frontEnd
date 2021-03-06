import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { IconsProviderModule } from '@icons/icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenusModule } from './menus/menus.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    IconsProviderModule,
    NzMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenusModule,
    HammerModule,
    NzModalModule,
    FormsModule,
    NzInputModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/user/menus/' },
    /**
     *为日期选择器配置时间地区
     *
     * */
    { provide: MAT_DATE_LOCALE, useValue: 'zh-cn' },
    { provide: LOCALE_ID, useValue: 'zh-cn' },
    { provide: NzMessageService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
