import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCommonComponent } from './admin-common.component';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IconsProviderModule } from '@icons/icons-provider.module';

@NgModule({
  declarations: [AdminCommonComponent],
  imports: [
    CommonModule,
    NzListModule,
    NzSkeletonModule,
    ScrollingModule,
    IconsProviderModule,
  ],
  bootstrap: [AdminCommonComponent],
})
export class AdminCommonModule {}
