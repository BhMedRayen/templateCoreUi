import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/teams.model';
import { TeamServiceService } from 'src/app/services/team-service.service';
import  {CreateTeamComponent} from '../create-team/create-team.component'
import { result } from 'lodash-es';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DeleteTeamComponent} from '../delete-team/delete-team.component'
@Component({
  selector: 'app-all-teams',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss'] // Note the correct property name styleUrls
})
export class AllTeamsComponent implements OnInit {

  teams : Team [] = []

  constructor (
    private teamsService : TeamServiceService,
    public dialog: MatDialog

  ) {}


  ngOnInit(): void {
    this.getAllTeams()
    
  }

  getAllTeams(): void {
    this.teamsService.getAllTeams().subscribe({
      next: (response: any) => {
        this.teams = response.teams;
        this.teams.forEach(team => { 
          team.users.forEach(user => { 
            user.photo = 'http://localhost:8000' + user.photo; 
            console.log(user.photo);
          });
        });
        console.log("teams : ", this.teams);
      }
    });
  }


openDeleteProjectComponent(teamId: number): void {
  const dialogRef = this.dialog.open(DeleteTeamComponent,{
    width:'500px', 
    data : { id : teamId },
  })
}

}
