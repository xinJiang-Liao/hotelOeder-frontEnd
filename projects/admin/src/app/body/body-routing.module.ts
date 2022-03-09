import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OneOrderComponent } from './function-module/one-order/one-order.component';
import { TwoNotPayComponent } from './function-module/two-not-pay/two-not-pay.component';
import { ThreeRecordComponent } from './function-module/three-record/three-record.component';

const routes: Routes = [
  {
    path: '',
    component: OneOrderComponent,
    children: [{ path: '', redirectTo: 'shop', pathMatch: 'full' }],
  },
  { path: 'shopping', component: OneOrderComponent },
  { path: 'pending', component: TwoNotPayComponent },
  { path: 'ordering', component: ThreeRecordComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyRoutingModule {}
