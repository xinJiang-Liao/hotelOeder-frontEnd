import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDetailsComponent } from './menus/lib-component/about-details/about-details.component';
import { ChefProfileComponent } from './menus/lib-component/chef-profile/chef-profile.component';
import { FoodChoicesComponent } from './menus/lib-component/food-choices/food-choices.component';

const routes: Routes = [
  {
    path: 'menus',
    loadChildren: () =>
      import('./menus/menus.module').then((m) => m.MenusModule),
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
