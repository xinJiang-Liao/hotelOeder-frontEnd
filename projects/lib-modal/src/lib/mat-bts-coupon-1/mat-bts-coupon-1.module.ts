import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBtsCoupon1Component } from './mat-bts-coupon-1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserCoupon2Module } from '@component/user-coupon-2/user-coupon-2.module';

@NgModule({
  declarations: [MatBtsCoupon1Component],
  imports: [CommonModule, FontAwesomeModule, UserCoupon2Module],
  exports: [MatBtsCoupon1Component],
})
export class MatBtsCoupon1Module {
  //
}
