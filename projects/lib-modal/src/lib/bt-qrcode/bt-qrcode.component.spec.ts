import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtQrcodeComponent } from './bt-qrcode.component';

describe('BtQrcodeComponent', () => {
  let component: BtQrcodeComponent;
  let fixture: ComponentFixture<BtQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtQrcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
