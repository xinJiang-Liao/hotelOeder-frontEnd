import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtModalConfirmComponent } from './bt-modal-confirm.component';

describe('BsModalMsgComponent', () => {
  let component: BtModalConfirmComponent;
  let fixture: ComponentFixture<BtModalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtModalConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
