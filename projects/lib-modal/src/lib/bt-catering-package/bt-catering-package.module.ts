import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtModalModule } from '@modal/bt/bt-modal.module';
import { BtModalCateringPackageService } from '@modal/bt-catering-package/bt-catering-package.service';
import { CateringDishes2Module } from '@component/catering-dishes-2/catering-dishes-2.module';
import { BtCateringPackageComponent } from './bt-catering-package.component';

@NgModule({
  declarations: [BtCateringPackageComponent],
  imports: [CommonModule, CateringDishes2Module, BtModalModule.forRoot()],
  exports: [BtCateringPackageComponent],
})
export class BtModalCateringPackageModule {
  static forRoot(): ModuleWithProviders<BtModalCateringPackageModule> {
    return {
      ngModule: BtModalCateringPackageModule,
      providers: [BtModalCateringPackageService],
    };
  }
}
