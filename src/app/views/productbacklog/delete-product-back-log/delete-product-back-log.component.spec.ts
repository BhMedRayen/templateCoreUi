import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductBackLogComponent } from './delete-product-back-log.component';

describe('DeleteProductBackLogComponent', () => {
  let component: DeleteProductBackLogComponent;
  let fixture: ComponentFixture<DeleteProductBackLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProductBackLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteProductBackLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
