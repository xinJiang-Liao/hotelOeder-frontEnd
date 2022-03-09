import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWaitingComponent } from './table-waiting.component';

describe('TableWaitingComponent', () => {
  let component: TableWaitingComponent;
  let fixture: ComponentFixture<TableWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
