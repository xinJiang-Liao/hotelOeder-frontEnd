import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MenusComponent, HomePageComponent],
  imports: [CommonModule, MenusRoutingModule, NzCarouselModule, NzRadioModule, FormsModule],
})
export class MenusModule {}
