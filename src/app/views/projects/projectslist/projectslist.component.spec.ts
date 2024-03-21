import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectslistComponent } from './projectslist.component';

describe('ProjectslistComponent', () => {
  let component: ProjectslistComponent;
  let fixture: ComponentFixture<ProjectslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
