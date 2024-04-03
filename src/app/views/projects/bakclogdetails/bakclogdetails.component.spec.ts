import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakclogdetailsComponent } from './bakclogdetails.component';

describe('BakclogdetailsComponent', () => {
  let component: BakclogdetailsComponent;
  let fixture: ComponentFixture<BakclogdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakclogdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BakclogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
