import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsBannerComponent } from './chefs-banner.component';

describe('ChefsBannerComponent', () => {
  let component: ChefsBannerComponent;
  let fixture: ComponentFixture<ChefsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
