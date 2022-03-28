import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDistinguishModule } from '@login/LoginDistinguish.module';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzModalService } from 'ng-zorro-antd/modal';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    BrowserAnimationsModule,
    LoginDistinguishModule,
    HttpClientModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NzModalService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
