import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCommonComponent } from './admin-common.component';

import { UserDetailModule } from '@component/user-detail/user-detail.module';
import {IconsProviderModule} from '@icons/icons-provider.module';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';

// import { NzListModule } from 'ng-zorro-antd/list';
// import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { IconsProviderModule } from '@icons/icons-provider.module';

@NgModule({
  declarations: [AdminCommonComponent],
  imports: [
    CommonModule,
    UserDetailModule,
    IconsProviderModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    // NzListModule,
    // NzSkeletonModule,
    // ScrollingModule,
    // IconsProviderModule,
  ],
  bootstrap: [AdminCommonComponent],
})
export class AdminCommonModule {}
