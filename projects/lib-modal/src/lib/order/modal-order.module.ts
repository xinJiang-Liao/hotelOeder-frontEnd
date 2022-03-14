import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsModalModule } from '@modal/bs/bs-modal.module';
import { BtModalModule } from '@modal/bt/bt-modal.module';
import { ModalOrderComponent } from './modal-order/modal-order.component';
import { ModalOrderService } from './modal-order.service';
import { Order2Module } from '@component/order-2/order-2.module';
import { SafePipeModule } from '@pipe/safe-pipe.module';
import { Order3Module } from '@component/order-3/order-3.module';

@NgModule({
  declarations: [ModalOrderComponent],
  imports: [
    CommonModule,
    BsModalModule.forRoot(),
    BtModalModule,
    Order2Module,
    Order3Module,
    SafePipeModule,
  ],
  exports: [ModalOrderComponent],
})
export class ModalOrderModule {
  static forRoot(): ModuleWithProviders<ModalOrderModule> {
    return {
      ngModule: ModalOrderModule,
      providers: [ModalOrderService],
    };
  }
}
