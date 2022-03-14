import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalModule } from '../bs/bs-modal.module';
import { BsModalMsgComponent } from './bs-modal-msg/bs-modal-msg.component';
import { BsModalMsgService } from './bs-modal-msg.service';

@NgModule({
  declarations: [BsModalMsgComponent],
  imports: [CommonModule, BsModalModule.forRoot()],
  exports: [BsModalMsgComponent],
})
export class BsModalMsgModule {
  static forRoot(): ModuleWithProviders<BsModalMsgModule> {
    return {
      ngModule: BsModalMsgModule,
      providers: [BsModalMsgService],
    };
  }
}
