import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginDistinguishComponent } from './login-distinguish.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from '@icons/icons-provider.module';

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
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NzMessageService }],
  bootstrap: [LoginDistinguishComponent],
})
export class LoginDistinguishModule {}
