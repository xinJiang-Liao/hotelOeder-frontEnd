import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalMsgComponent } from './bs-modal-msg.component';

describe('BsModalMsgComponent', () => {
  let component: BsModalMsgComponent;
  let fixture: ComponentFixture<BsModalMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsModalMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsModalMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
