import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpInboxComponent } from './emp-inbox.component';

describe('EmpInboxComponent', () => {
  let component: EmpInboxComponent;
  let fixture: ComponentFixture<EmpInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpInboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
