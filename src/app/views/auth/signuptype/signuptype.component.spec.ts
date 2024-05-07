import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuptypeComponent } from './signuptype.component';

describe('SignuptypeComponent', () => {
  let component: SignuptypeComponent;
  let fixture: ComponentFixture<SignuptypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignuptypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignuptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
