import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodChoicesComponent } from './food-choices.component';

describe('FoodChoicesComponent', () => {
  let component: FoodChoicesComponent;
  let fixture: ComponentFixture<FoodChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
