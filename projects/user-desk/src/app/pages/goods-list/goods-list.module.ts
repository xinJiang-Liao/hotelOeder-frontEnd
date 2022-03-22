import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [GoodsListComponent],
  imports: [CommonModule, NzTableModule, NzButtonModule],
  bootstrap: [GoodsListComponent],
})
export class GoodsListModule {}
