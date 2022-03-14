import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBtsCoupon1Component } from './mat-bts-coupon-1.component';

describe('MatBtsCoupon1Component', () => {
  let component: MatBtsCoupon1Component;
  let fixture: ComponentFixture<MatBtsCoupon1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatBtsCoupon1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBtsCoupon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
