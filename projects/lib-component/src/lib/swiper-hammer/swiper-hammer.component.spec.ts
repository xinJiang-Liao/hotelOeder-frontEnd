import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperHammerComponent } from './swiper-hammer.component';

describe('SwiperHammerComponent', () => {
  let component: SwiperHammerComponent;
  let fixture: ComponentFixture<SwiperHammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperHammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperHammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
