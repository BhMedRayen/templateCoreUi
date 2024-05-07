import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupemployeComponent } from './signupemploye.component';

describe('SignupemployeComponent', () => {
  let component: SignupemployeComponent;
  let fixture: ComponentFixture<SignupemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupemployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
