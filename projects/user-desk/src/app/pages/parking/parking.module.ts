import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingComponent } from './parking.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QRCodeModule } from 'angularx-qrcode';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ParkingComponent],
  imports: [CommonModule, FontAwesomeModule, QRCodeModule, MatSnackBarModule],
  bootstrap: [ParkingComponent],
})
export class ParkingModule {}
