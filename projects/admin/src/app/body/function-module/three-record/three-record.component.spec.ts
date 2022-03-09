import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeRecordComponent } from './three-record.component';

describe('ThreeRecordComponent', () => {
  let component: ThreeRecordComponent;
  let fixture: ComponentFixture<ThreeRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
