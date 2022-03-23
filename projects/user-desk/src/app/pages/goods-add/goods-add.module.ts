import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsAddComponent } from './goods-add.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [GoodsAddComponent],
  imports: [CommonModule, NzGridModule, NzDividerModule],
  bootstrap: [GoodsAddComponent],
  // exports: [NzGridModule, NzDividerModule],
})
export class GoodsAddModule {}
