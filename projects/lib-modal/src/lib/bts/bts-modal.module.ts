import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalModule } from '@modal/bs/bs-modal.module';
import { BtModalModule } from '@modal/bt/bt-modal.module';
import { BtsModalService } from './bts-modal.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BsModalModule, BtModalModule],
  exports: [],
})
export class BtsModalModule {
  static forRoot(): ModuleWithProviders<BtsModalModule> {
    return {
      ngModule: BtsModalModule,
      providers: [BtsModalService],
    };
  }
}
