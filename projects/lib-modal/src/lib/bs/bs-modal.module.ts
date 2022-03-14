import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BsModalComponent } from './bs-modal/bs-modal.component';
import { BsModalService } from './bs-modal.service';

@NgModule({
  declarations: [BsModalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [BsModalComponent]
})
export class BsModalModule {
  static forRoot(): ModuleWithProviders<BsModalModule> {
    return {
      ngModule: BsModalModule,
      providers: [BsModalService]
    };
  }
}
