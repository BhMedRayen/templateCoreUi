import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/teams.model';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-all-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss'] // Note the correct property name styleUrls
})
export class AllTeamsComponent implements OnInit {

  teams : Team [] = []

  constructor (
    private teamsService : TeamServiceService
  ) {}


  ngOnInit(): void {
    this.getAllTeams()
    
  }

  getAllTeams(): void {
    this.teamsService.getAllTeams().subscribe({
      next: (response: any) => {
        this.teams = response.teams;
        this.teams.forEach(team => { // Iterate over each team
          team.users.forEach(user => { // Iterate over each user in the team
            user.photo = 'http://localhost:8000' + user.photo; // Update the photo URL
          });
        });
        console.log("teams : ", this.teams);
      }
    });
  }
  

}
