import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtModalComponent } from './bt-modal/bt-modal.component';
import { BtModalService } from './bt-modal.service';

@NgModule({
  declarations: [BtModalComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [BtModalComponent],
})
export class BtModalModule {
  static forRoot(): ModuleWithProviders<BtModalModule> {
    return {
      ngModule: BtModalModule,
      providers: [BtModalService],
    };
  }
}
