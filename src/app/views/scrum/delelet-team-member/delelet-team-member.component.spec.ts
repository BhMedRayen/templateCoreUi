import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleletTeamMemberComponent } from './delelet-team-member.component';

describe('DeleletTeamMemberComponent', () => {
  let component: DeleletTeamMemberComponent;
  let fixture: ComponentFixture<DeleletTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleletTeamMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleletTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
