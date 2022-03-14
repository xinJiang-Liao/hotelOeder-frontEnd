import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtQrcodeComponent } from './bt-qrcode.component';
import { BtModalModule } from '../bt/bt-modal.module';

import { BtQrcodeService } from './bt-qrcode.service';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [BtQrcodeComponent],
  imports: [CommonModule, BtModalModule, QRCodeModule],
  exports: [BtQrcodeComponent],
})
export class BtQrcodeModule {
  static forRoot(): ModuleWithProviders<BtQrcodeModule> {
    return {
      ngModule: BtQrcodeModule,
      providers: [BtQrcodeService],
    };
  }
}
