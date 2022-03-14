import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtModalModule } from '@modal/bt/bt-modal.module';
import { BtModalConfirmComponent } from './bt-modal-confirm/bt-modal-confirm.component';
import { BtModalConfirmService } from './bt-modal-confirm.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BtModalConfirmComponent],
  imports: [CommonModule, FormsModule, BtModalModule.forRoot()],
  exports: [BtModalConfirmComponent],
})
export class BtModalConfirmModule {
  static forRoot(): ModuleWithProviders<BtModalConfirmModule> {
    return {
      ngModule: BtModalConfirmModule,
      providers: [BtModalConfirmService],
    };
  }
}
