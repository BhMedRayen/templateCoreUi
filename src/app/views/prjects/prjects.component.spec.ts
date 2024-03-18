import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjectsComponent } from './prjects.component';

describe('PrjectsComponent', () => {
  let component: PrjectsComponent;
  let fixture: ComponentFixture<PrjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
