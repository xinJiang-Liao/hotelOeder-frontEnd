import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ShoppingCartComponent,
  YHComponent,
  YHQComponent,
} from '@component/shopping-cart/shopping-cart.component';
import { IconsProviderModule } from '@icons/icons-provider.module';
import { TableComponent } from '@component/shopping-cart/table/table.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    YHComponent,
    YHQComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzModalModule,
    NzSelectModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  exports: [ShoppingCartComponent, YHComponent, YHQComponent, TableComponent],
})
export class ShoppingCartModule {}
