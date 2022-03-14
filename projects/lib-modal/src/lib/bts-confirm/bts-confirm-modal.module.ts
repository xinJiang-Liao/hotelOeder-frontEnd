import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalConfirmModule } from '@modal/bs-confirm/bs-modal-confirm.module';
import { BtModalConfirmModule } from '@modal/bt-confirm/bt-modal-confirm.module';
import { BtsModalConfirmService } from './bts-confirm-modal.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BsModalConfirmModule, BtModalConfirmModule],
  exports: [],
})
export class BtsModalConfirmModule {
  static forRoot(): ModuleWithProviders<BtsModalConfirmModule> {
    return {
      ngModule: BtsModalConfirmModule,
      providers: [BtsModalConfirmService],
    };
  }
}
