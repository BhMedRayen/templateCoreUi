import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSprintBackLogComponent } from './create-sprint-back-log.component';

describe('CreateSprintBackLogComponent', () => {
  let component: CreateSprintBackLogComponent;
  let fixture: ComponentFixture<CreateSprintBackLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSprintBackLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSprintBackLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
