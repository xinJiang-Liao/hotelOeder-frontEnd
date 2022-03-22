import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsAddComponent } from './goods-add.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [GoodsAddComponent],
  imports: [CommonModule, NzGridModule],
  bootstrap: [GoodsAddComponent],
})
export class GoodsAddModule {}
