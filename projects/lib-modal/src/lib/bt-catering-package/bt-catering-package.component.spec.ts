import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtCateringPackageComponent } from './bt-catering-package.component';

describe('BtCateringPackageComponent', () => {
  let component: BtCateringPackageComponent;
  let fixture: ComponentFixture<BtCateringPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtCateringPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtCateringPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
