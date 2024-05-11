import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprojectComponent } from './deleteproject.component';

describe('DeleteprojectComponent', () => {
  let component: DeleteprojectComponent;
  let fixture: ComponentFixture<DeleteprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
