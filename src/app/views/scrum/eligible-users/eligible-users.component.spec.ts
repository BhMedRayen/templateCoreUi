import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleUsersComponent } from './eligible-users.component';

describe('EligibleUsersComponent', () => {
  let component: EligibleUsersComponent;
  let fixture: ComponentFixture<EligibleUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EligibleUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EligibleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
