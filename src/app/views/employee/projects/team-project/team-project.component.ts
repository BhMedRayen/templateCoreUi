import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-team-project',
  templateUrl: './team-project.component.html',
  styleUrls: ['./team-project.component.scss']
})
export class TeamProjectComponent implements OnInit {
 
  emplId: number = 0;
  user: any;
  teams: any[] = [];
  projectsByTeam: any = {};

  constructor(private teamService: TeamServiceService) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('employee');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log("user auth ", this.user);
    } else {
      console.error('User data not found in local storage.');
    }
    this.emplId = this.user.id;
    this.getUserTeams();
  }

  getUserTeams(): void {
    this.teamService.getUserTeams(this.emplId).subscribe({
      next: (response: any) => {
        this.teams = response.teams;
        console.log('teams for the auth employee', this.teams);
        console.log('Teams:', this.teams);

        this.teams.forEach(team => {
          console.log('Team:', team);

          if (team.team.id) { 
            this.getProjectsByTeam(team.team.id); 
          } else {
            console.error('Team ID is undefined or null');
          }
        });
      },
      error: (err: any) => {
        console.error('Error fetching teams', err);
      }
    });
  }

  getProjectsByTeam(teamId: number): void {
    this.teamService.getProjectByTeamId(teamId).subscribe({
      next: (response: any) => {
        this.projectsByTeam[teamId] = response.projects;
        console.log(`projects for team ${teamId}`, response.projects);
      },
      error: (err: any) => {
        console.error(`Error fetching projects for team ${teamId}`, err);
      }
    });
  }
}
