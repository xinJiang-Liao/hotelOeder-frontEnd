import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconsProviderModule } from '@icons/icons-provider.module';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [GoodsListComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    IconsProviderModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    FormsModule,
  ],
  bootstrap: [GoodsListComponent],
})
export class GoodsListModule {}
