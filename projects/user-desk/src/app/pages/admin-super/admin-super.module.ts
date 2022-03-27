import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSuperComponent } from './admin-super.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { IconsProviderModule } from '@icons/icons-provider.module';
import { LoginDistinguishModule } from '@login/LoginDistinguish.module';
import { UserDetailModule } from '@component/user-detail/user-detail.module';

@NgModule({
  declarations: [AdminSuperComponent],
  imports: [
    CommonModule,
    NzStepsModule,
    IconsProviderModule,
    LoginDistinguishModule,
    UserDetailModule,
  ],
  bootstrap: [AdminSuperComponent],
})
export class AdminSuperModule {}
