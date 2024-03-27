import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailComponent } from './projectdetail.component';

describe('ProjectdetailComponent', () => {
  let component: ProjectdetailComponent;
  let fixture: ComponentFixture<ProjectdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
