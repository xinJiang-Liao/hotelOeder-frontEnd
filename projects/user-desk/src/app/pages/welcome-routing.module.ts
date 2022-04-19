import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsAddComponent } from './goods-add/goods-add.component';
import { AdminCommonComponent } from './admin-common/admin-common.component';
import { AdminSuperComponent } from './admin-super/admin-super.component';
import { ParkingComponent } from './parking/parking.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: '', redirectTo: 'goods', pathMatch: 'full' },
      {
        path: 'goods',
        component: GoodsListComponent,
        loadChildren: () =>
          import('./goods-list/goods-list.module').then(
            (m) => m.GoodsListModule
          ),
      },
      {
        path: 'add',
        component: GoodsAddComponent,
        loadChildren: () =>
          import('./goods-add/goods-add.module').then((m) => m.GoodsAddModule),
      },
      {
        path: 'common',
        component: AdminCommonComponent,
        loadChildren: () =>
          import('./admin-common/admin-common.module').then(
            (m) => m.AdminCommonModule
          ),
      },
      {
        path: 'super',
        component: AdminSuperComponent,
        loadChildren: () =>
          import('./admin-super/admin-super.module').then(
            (m) => m.AdminSuperModule
          ),
      },
      {
        path: 'parking',
        component: ParkingComponent,
        loadChildren: () =>
          import('./parking/parking.module').then((m) => m.ParkingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
