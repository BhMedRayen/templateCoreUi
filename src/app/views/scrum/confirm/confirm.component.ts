import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormModule } from '@coreui/angular';
import { TeamServiceService } from 'src/app/services/team-service.service';


@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [
    CommonModule,
    FormModule
  ],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent implements OnInit {
  loading : boolean = false;

  constructor (
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teamId : number ,userId : number  },
    private teamsService : TeamServiceService

  ) {}


  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  
  }

  assignAsScrumMaster() {
    this.loading=true
    this.teamsService.changeScrumMaster(this.data.teamId,this.data.userId).subscribe({
      next : (response : any) => {
        console.log("Team master assigned succefuly");
        this.loading=false
        location.reload()
        
      },
      error : (error : any) =>{
        this.loading=false;
        console.log("error updating scrum master " , error);
     
      },
    })
    
  }

}
