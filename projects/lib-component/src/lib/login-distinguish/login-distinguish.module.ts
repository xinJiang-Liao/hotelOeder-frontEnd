import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginDistinguishComponent } from './login-distinguish.component';
import { IconsProviderModule } from '@icons/icons-provider.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginDistinguishComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzMenuModule,
    LoginRoutingModule,
  ],
  providers: [{ provide: NzMessageService }],
  bootstrap: [LoginDistinguishComponent],
  exports: [LoginDistinguishComponent],
})
export class LoginDistinguishModule {}
