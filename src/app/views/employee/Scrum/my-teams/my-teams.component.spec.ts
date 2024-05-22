import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsComponent } from './my-teams.component';

describe('MyTeamsComponent', () => {
  let component: MyTeamsComponent;
  let fixture: ComponentFixture<MyTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
