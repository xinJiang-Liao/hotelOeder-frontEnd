import { Component, Inject } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-mat-bts-coupon1',
  templateUrl: './mat-bts-coupon-1.component.html',
  styleUrls: ['./mat-bts-coupon-1.component.scss'],
})
export class MatBtsCoupon1Component {
  public faChevronDown = faChevronDown;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private matBottomSheetRef: MatBottomSheetRef<MatBtsCoupon1Component>
  ) {
    //
  }

  // ngOnInit(): void {}

  public onclose(event: MouseEvent) {
    this.matBottomSheetRef.dismiss();
    event.preventDefault();
  }
}
