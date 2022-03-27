import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {MatCardModule} from '@angular/material/card';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';



@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    NzAvatarModule,
    MatCardModule,
    NzButtonModule,
    NzDrawerModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzDatePickerModule
  ],
  exports:[UserDetailComponent]
})
export class UserDetailModule { }
