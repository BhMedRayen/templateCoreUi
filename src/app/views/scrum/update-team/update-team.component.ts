import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { ActivatedRoute } from '@angular/router'; 
import { Team } from 'src/app/models/teams.model';
import  {DeleletTeamMemberComponent} from '../delelet-team-member/delelet-team-member.component'
import { MatDialog } from '@angular/material/dialog';
import {ConfirmComponent} from '../confirm/confirm.component'
@Component({
  selector: 'app-update-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit{
  
  teamId : number = 0;
  team : Team | undefined;
  scrumMaster: any;

  constructor (
    private teamServices : TeamServiceService,
    private route: ActivatedRoute, 
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamId=params['id'];
      console.log("Team id :",this.teamId);
      this.getTeamById(this.teamId);
    })
   
  }



  getTeamById(teamId: number): void {
    this.teamServices.getTeamById(teamId).subscribe({
      next: (response: any) => {
        this.team = response.team;
        this.getScrumMasterDetails()
        if (this.team && this.team.users) {
          this.team.users.forEach((teamMember: any) => {
            if (teamMember.photo) {
              teamMember.photo = 'http://localhost:8000' + teamMember.photo;
            }
          });
        }
        console.log("team", this.team);
        console.log("Users:", this.team?.users);
      },
      error: (error: any) => {
        console.log('Error fetching team:', error);
      },
      complete: () => {}
    });
  }
  
  
  getScrumMasterDetails(): void {
    console.log("Team:", this.team); 
    const scrumMasterUser = this.team?.users.find(user => user.pivot?.is_scrum_master === 1);
    console.log("Scrum master user:", scrumMasterUser);
    if (scrumMasterUser) {
      this.scrumMaster = scrumMasterUser;
      console.log("Scrum master:", this.scrumMaster);
    } else {
      console.log('Scrum master not found in team users.');
    }
  }
  
  
  openDeleteMemberComponent(teamId : number , userId : number) : void {
    const dialogRef = this.dialog.open(DeleletTeamMemberComponent,{
      width :'500px',
      data : { teamId : teamId , userId : userId  }
    })
  }

  openConfirmMemberComponent(teamId : number , userId : number) : void {
    const dialogRef = this.dialog.open(ConfirmComponent,{
      width :'500px',
      data : { teamId : teamId , userId : userId  }
    })
  }

}
