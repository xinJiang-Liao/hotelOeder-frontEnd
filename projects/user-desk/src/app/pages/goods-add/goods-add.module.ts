import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsAddComponent } from './goods-add.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { GoodsListModule } from '../goods-list/goods-list.module';
import { IconsProviderModule } from '@icons/icons-provider.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [GoodsAddComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzSpaceModule,
    NzUploadModule,
    NzModalModule,
    GoodsListModule,
    IconsProviderModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzInputModule,
    FormsModule,
    NzTableModule,
    NzPopconfirmModule,
  ],
  bootstrap: [GoodsAddComponent],
})
export class GoodsAddModule {}
