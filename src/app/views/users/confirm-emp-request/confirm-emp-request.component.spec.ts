import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmpRequestComponent } from './confirm-emp-request.component';

describe('ConfirmEmpRequestComponent', () => {
  let component: ConfirmEmpRequestComponent;
  let fixture: ComponentFixture<ConfirmEmpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmEmpRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmEmpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
