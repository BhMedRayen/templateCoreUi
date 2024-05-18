import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendedRequestComponent } from './sended-request.component';

describe('SendedRequestComponent', () => {
  let component: SendedRequestComponent;
  let fixture: ComponentFixture<SendedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendedRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
