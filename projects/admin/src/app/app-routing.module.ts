import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./body/body.module').then((mod) => mod.BodyModule),
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
