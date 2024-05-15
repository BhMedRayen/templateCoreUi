import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprojectsComponent } from './allprojects.component';

describe('AllprojectsComponent', () => {
  let component: AllprojectsComponent;
  let fixture: ComponentFixture<AllprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
