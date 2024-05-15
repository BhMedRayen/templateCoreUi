import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormModule } from '@coreui/angular';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-delelet-team-member',
  standalone: true,
  imports: [
    CommonModule,
    FormModule
  ],
  templateUrl: './delelet-team-member.component.html',
  styleUrl: './delelet-team-member.component.scss'
})
export class DeleletTeamMemberComponent  implements OnInit{
  teamId : number = 0;
  userId : number = 0;
  loading : boolean = false;

  constructor (
    public dialogRef: MatDialogRef<DeleletTeamMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teamId : number ,userId : number  },
    private teamsService : TeamServiceService

  ) {}
  

  ngOnInit(): void {
    this.teamId = this.data.teamId;
    this.userId = this.data.userId;
    console.log("user id and team id ",this.teamId,this.userId);
    
  }
  onDeleteClick() {

  this.loading=true
    this.teamsService.deleteTeamMembre(this.teamId, this.userId).subscribe(
      () => {
        this.loading = false;
        console.log("Team member deleted successfully");
        this.dialogRef.close();
        
      },
      (error) => {
        console.error("Error deleting team member:", error);
        alert("Error deleting team member");
        this.loading=false
        this.dialogRef.close();
      }
    );
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  
}
