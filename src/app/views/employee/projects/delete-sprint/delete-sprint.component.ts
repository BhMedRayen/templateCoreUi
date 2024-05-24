import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SprintServiceService } from 'src/app/services/sprint-service.service';

@Component({
  selector: 'app-delete-sprint',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './delete-sprint.component.html',
  styleUrl: './delete-sprint.component.scss'
})
export class DeleteSprintComponent implements OnInit{
  loading : boolean = false
  constructor (
    public dialogRef: MatDialogRef<DeleteSprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sprintId: number },
    private sprintService : SprintServiceService
  ) {}
  
 
  ngOnInit(): void {
    
  }

  onDeleteClick() : void {
    this.loading=true 
    this.sprintService.deleteSprint(this.data.sprintId).subscribe({
      next : (response : any) => {
        this.loading=false
        console.log("sprint deleted succefully " , response);
        this.dialogRef.close()
        location.reload()
      },
      error : (error : any)=> {
        this.loading=false
        console.log("error deleting sprint " , error);
      }
    })
  }

  onCancelClick() {
    this.dialogRef.close()
  }

}
