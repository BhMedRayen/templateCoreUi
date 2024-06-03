import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-add-member-to-team',
  standalone: true,
  imports: [],
  templateUrl: './add-member-to-team.component.html',
  styleUrl: './add-member-to-team.component.scss'
})
export class AddMemberToTeamComponent implements OnInit {

constructor (
    public teamService : TeamServiceService,
) {}

  ngOnInit(): void {
   
  }

  

  addTeamToMember(teamId: number, userIds: number[]): void {
    this.teamService.addTeamMember(teamId, userIds).subscribe({
      next: (response: any) => {
        console.log('Team members added successfully:', response);
        location.reload()
      },
      error: (error: any) => {
        console.error('Error adding team members:', error);
      
      }
    });
  }

  

}
