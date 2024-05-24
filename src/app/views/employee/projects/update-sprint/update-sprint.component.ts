import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SprintServiceService } from 'src/app/services/sprint-service.service';

@Component({
  selector: 'app-update-sprint',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './update-sprint.component.html',
  styleUrl: './update-sprint.component.scss'
})
export class UpdateSprintComponent  implements OnInit {
  
    sprintname : string = ''
    description : string = ''
    loading : boolean = false 
  constructor (
    public dialogRef: MatDialogRef<UpdateSprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {  sprintId : number , sprintname : string , sprintDescription : string },
    private sprintService : SprintServiceService
  ) {}
  
  ngOnInit(): void {
    console.log("sprint id ",this.data.sprintId , "sprint name ", this.data.sprintname ,"description " , this.data.sprintDescription);
    this.sprintname=this.data.sprintname
    this.description=this.data.sprintDescription
  }

  updateSprint(): void {
    this.loading = true;
    const data = {
      sprintname: this.sprintname,
      description: this.description
    };
    this.sprintService.updateSprint(data, this.data.sprintId).subscribe({
      next: (response: any) => {
        this.loading = false;
        console.log("sprint updated successfully", response.sprint);
        this.dialogRef.close()
        location.reload()
      },
      error: (error: any) => {
        this.loading = false;
        console.log("error updating sprint", error);
      }
    });
  }
  



}
