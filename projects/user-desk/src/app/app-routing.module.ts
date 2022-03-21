import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome.module').then((mod) => mod.WelcomeModule),
    // canActivate: [UserGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@login/LoginDistinguish.module').then(
        (mod) => mod.LoginDistinguishModule
      ),
    // canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
