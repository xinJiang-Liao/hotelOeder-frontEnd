import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { WelcomeModule } from './pages/welcome.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    WelcomeModule,
    HttpClientModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NzModalService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
