import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpComponent } from './delete-emp.component';

describe('DeleteEmpComponent', () => {
  let component: DeleteEmpComponent;
  let fixture: ComponentFixture<DeleteEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
