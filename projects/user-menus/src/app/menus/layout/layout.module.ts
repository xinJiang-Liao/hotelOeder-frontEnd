import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from 'projects/lib-component/src/lib/overlay/overlay.module';


@NgModule({
  declarations: [SidebarComponent, LayoutComponent, NavbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule,
    OverlayModule,
  ],

})
export class LayoutModule {}
