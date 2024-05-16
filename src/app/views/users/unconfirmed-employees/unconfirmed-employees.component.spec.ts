import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedEmployeesComponent } from './unconfirmed-employees.component';

describe('UnconfirmedEmployeesComponent', () => {
  let component: UnconfirmedEmployeesComponent;
  let fixture: ComponentFixture<UnconfirmedEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnconfirmedEmployeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnconfirmedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
