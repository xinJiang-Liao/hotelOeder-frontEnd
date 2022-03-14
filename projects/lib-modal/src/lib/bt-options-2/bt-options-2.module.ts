import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtOptions2Component } from './bt-options-2.component';
import { BtModalModule } from '@modal/bt/bt-modal.module';
import { FormsModule } from '@angular/forms';
import { BtModalOptions2Service } from '@modal/bt-options-2/bt-options-2.service';

@NgModule({
  declarations: [BtOptions2Component],
  imports: [CommonModule, FormsModule, BtModalModule.forRoot()],
  exports: [BtOptions2Component],
})
export class BtModalOptions2Module {
  static forRoot(): ModuleWithProviders<BtModalOptions2Module> {
    return {
      ngModule: BtModalOptions2Module,
      providers: [BtModalOptions2Service],
    };
  }
}
