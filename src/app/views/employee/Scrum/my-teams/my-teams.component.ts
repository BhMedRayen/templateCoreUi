import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from 'src/app/services/team-service.service';
@Component({
  selector: 'app-my-teams',
  standalone: true,
  imports: [],
  templateUrl: './my-teams.component.html',
  styleUrl: './my-teams.component.scss'
})
export class MyTeamsComponent implements OnInit {

emplId : number = 0;
user : any;
teams : any
constructor (
  private teamService : TeamServiceService,

) {}



  ngOnInit(): void {
    const userData = localStorage.getItem('employee');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log("user auth " , this.user);
      
    } else {
      console.error('User data not found in local storage.');
    }
    this.emplId=this.user.id
    this.getUserTeams();
    
  }

  getUserTeams() : void {
    this.teamService.getUserTeams(this.emplId).subscribe({
      next : (response : any) => {
        this.teams=response.teams
        console.log("teams for the auth employee",this.teams);
        
      }
    })
  }

}
