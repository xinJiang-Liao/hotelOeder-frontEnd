import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWaterComponent } from './table-water.component';

describe('TableWaterComponent', () => {
  let component: TableWaterComponent;
  let fixture: ComponentFixture<TableWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
