import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from '../icons-provider.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { GoodsListModule } from './goods-list/goods-list.module';
import { AdminCommonModule } from './admin-common/admin-common.module';
import { AdminSuperModule } from './admin-super/admin-super.module';
import { ParkingModule } from './parking/parking.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    WelcomeRoutingModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NgZorroAntdMobileModule,
    GoodsListModule,
    AdminCommonModule,
    AdminSuperModule,
    ParkingModule,
  ],
  providers: [{ provide: NzMessageService }],
  bootstrap: [WelcomeComponent],
})
export class WelcomeModule {}
