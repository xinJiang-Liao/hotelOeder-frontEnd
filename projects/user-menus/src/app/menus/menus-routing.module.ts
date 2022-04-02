import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';

const routes: Routes = [
  {
    path: '',
    component: MenusComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () =>
    //       import('./home-page/home-page.module').then((m) => m.HomePageModule),
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenusRoutingModule {}
