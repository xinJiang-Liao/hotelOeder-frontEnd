import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { APP_BASE_HREF } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
  providers: [{ provide: APP_BASE_HREF, useValue: '/user/menus/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
