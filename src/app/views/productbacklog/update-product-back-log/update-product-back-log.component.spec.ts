import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductBackLogComponent } from './update-product-back-log.component';

describe('UpdateProductBackLogComponent', () => {
  let component: UpdateProductBackLogComponent;
  let fixture: ComponentFixture<UpdateProductBackLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProductBackLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateProductBackLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
