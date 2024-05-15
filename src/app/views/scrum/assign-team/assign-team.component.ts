import { Component, Inject, OnInit } from '@angular/core';
import { Team } from 'src/app/models/teams.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamServiceService } from 'src/app/services/team-service.service';



@Component({
  selector: 'app-assign-team',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './assign-team.component.html',
  styleUrl: './assign-team.component.scss'
})
export class AssignTeamComponent implements OnInit  {

  projectId : number = 0 ; 
  Teams : Team [] = [];
  selectedTeamId: number | undefined;
  loading : boolean = false;


  constructor (
    private teamService : TeamServiceService,
    public dialogRef: MatDialogRef<AssignTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectId : number },
  ) {}

  ngOnInit(): void {
    this.projectId = this.data.projectId
    console.log("project id : ", this.projectId);
    this.getTeams();
  }

  getTeams () : void {
    this.teamService.getAllTeams().subscribe({
      next:(response : any) => {
        this.Teams = response.teams
        console.log("teams" , this.Teams);
      },
      error : (error : any) => {
        console.error('Error fetching teams ',error)
      }
    })

  }

  assignTeam(): void {
    if (this.selectedTeamId !== undefined) {
      this.loading = true;
      this.teamService.assignTeamToBacklog(this.projectId, this.selectedTeamId).subscribe({
        next: (response: any) => {  
          this.loading = false;
          this.dialogRef.close();
        },
        error: (error: any) => {
          console.error('Error assigning team ', error);
          this.loading = false;
        }
      });
    }
  }

  
  onCancelClick(): void {
    this.dialogRef.close();
  }


  




}
