import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import { NavComponent } from './nav/nav.component';
import { OneOrderComponent } from './function-module/one-order/one-order.component';
import {
  MainComponent,
  NoteComponent,
} from './function-module/one-order/main/main.component';
import { DishesComponent } from './function-module/one-order/main/dishes/dishes.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  ShoppingCartComponent,
  YHComponent,
  YHQComponent,
} from '@component/shopping-cart/shopping-cart.component';
import { TableComponent } from '@component/shopping-cart/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonToggleComponent } from '@component/button-toggle/button-toggle.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TwoNotPayComponent } from './function-module/two-not-pay/two-not-pay.component';
import { TableWaitingComponent } from './function-module/two-not-pay/table-waiting/table-waiting.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThreeRecordComponent } from './function-module/three-record/three-record.component';
import { TableWaterComponent } from './function-module/three-record/table-water/table-water.component';
import { SelectionComponent } from './function-module/three-record/selection/selection.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChipsComponent } from '@component/chips-cart/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    NavComponent,
    OneOrderComponent,
    MainComponent,
    DishesComponent,
    NoteComponent,
    ShoppingCartComponent,
    YHComponent,
    YHQComponent,
    TableComponent,
    ButtonToggleComponent,
    TwoNotPayComponent,
    TableWaitingComponent,
    ThreeRecordComponent,
    TableWaterComponent,
    SelectionComponent,
    ChipsComponent,
  ],
  exports: [NavComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatChipsModule,
    MatNativeDateModule,
    HttpClientModule,
    DragDropModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class BodyModule {}
