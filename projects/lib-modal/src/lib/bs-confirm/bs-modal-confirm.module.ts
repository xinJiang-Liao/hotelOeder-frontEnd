import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalModule } from '@modal/bs/bs-modal.module';
import { BsModalConfirmService } from './bs-modal-confirm.service';
import { BsModalConfirmComponent } from './bs-modal-confirm/bs-modal-confirm.component';

@NgModule({
  declarations: [BsModalConfirmComponent],
  imports: [CommonModule, BsModalModule.forRoot()],
  exports: [BsModalConfirmComponent],
})
export class BsModalConfirmModule {
  static forRoot(): ModuleWithProviders<BsModalConfirmModule> {
    return {
      ngModule: BsModalConfirmModule,
      providers: [BsModalConfirmService],
    };
  }
}
