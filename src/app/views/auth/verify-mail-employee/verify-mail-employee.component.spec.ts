import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMailEmployeeComponent } from './verify-mail-employee.component';

describe('VerifyMailEmployeeComponent', () => {
  let component: VerifyMailEmployeeComponent;
  let fixture: ComponentFixture<VerifyMailEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyMailEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyMailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
