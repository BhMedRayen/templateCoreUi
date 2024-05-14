import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductBackLogComponent } from './create-product-back-log.component';

describe('CreateProductBackLogComponent', () => {
  let component: CreateProductBackLogComponent;
  let fixture: ComponentFixture<CreateProductBackLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductBackLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProductBackLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
