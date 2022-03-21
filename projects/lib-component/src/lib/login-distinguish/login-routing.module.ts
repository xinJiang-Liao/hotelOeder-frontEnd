import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDistinguishComponent } from '@login/login-distinguish.component';

const routes: Routes = [
  {
    path: '',
    component: LoginDistinguishComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
