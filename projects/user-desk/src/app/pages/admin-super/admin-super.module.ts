import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSuperComponent } from './admin-super.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { IconsProviderModule } from '@icons/icons-provider.module';
import { LoginDistinguishModule } from '@login/LoginDistinguish.module';

@NgModule({
  declarations: [AdminSuperComponent],
  imports: [
    CommonModule,
    NzStepsModule,
    IconsProviderModule,
    LoginDistinguishModule,
  ],
  bootstrap: [AdminSuperComponent],
})
export class AdminSuperModule {}
