import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDistinguishComponent } from './login-distinguish.component';

describe('LoginDistinguishComponent', () => {
  let component: LoginDistinguishComponent;
  let fixture: ComponentFixture<LoginDistinguishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDistinguishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDistinguishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
