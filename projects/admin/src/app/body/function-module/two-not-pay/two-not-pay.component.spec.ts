import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoNotPayComponent } from './two-not-pay.component';

describe('TwoNotPayComponent', () => {
  let component: TwoNotPayComponent;
  let fixture: ComponentFixture<TwoNotPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoNotPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoNotPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
