import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalConfirmComponent } from './bs-modal-confirm.component';

describe('BsModalMsgComponent', () => {
  let component: BsModalConfirmComponent;
  let fixture: ComponentFixture<BsModalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BsModalConfirmComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
