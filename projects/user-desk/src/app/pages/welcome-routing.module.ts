import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsAddComponent } from './goods-add/goods-add.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
