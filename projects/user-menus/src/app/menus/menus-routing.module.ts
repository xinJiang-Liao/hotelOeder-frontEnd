import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';
import { FoodChoicesComponent } from './lib-component/food-choices/food-choices.component';
import { ChefProfileComponent } from './lib-component/chef-profile/chef-profile.component';
import { AboutDetailsComponent } from './lib-component/about-details/about-details.component';
import { ShoppingCartComponent } from '@component/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: MenusComponent,

    children: [],
  },
  {
    path: 'foods',
    component: FoodChoicesComponent,
  },
  {
    path: 'chefs',
    component: ChefProfileComponent,
  },
  {
    path: 'about',
    component: AboutDetailsComponent,
  },
  {
    path: 'shoppingCart',
    component: ShoppingCartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenusRoutingModule {}
