import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuperComponent } from './admin-super.component';

describe('AdminSuperComponent', () => {
  let component: AdminSuperComponent;
  let fixture: ComponentFixture<AdminSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSuperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
