import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupnavbarComponent } from './signupnavbar.component';

describe('SignupnavbarComponent', () => {
  let component: SignupnavbarComponent;
  let fixture: ComponentFixture<SignupnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
