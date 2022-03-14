import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtModalComponent } from './bs-modal.component';

describe('BsModalComponent', () => {
  let component: BtModalComponent;
  let fixture: ComponentFixture<BtModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
