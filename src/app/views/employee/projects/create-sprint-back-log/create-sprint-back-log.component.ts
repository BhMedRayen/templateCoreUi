import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SprintServiceService } from 'src/app/services/sprint-service.service';

@Component({
  selector: 'app-create-sprint-back-log',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-sprint-back-log.component.html',
  styleUrl: './create-sprint-back-log.component.scss'
})
export class CreateSprintBackLogComponent  implements OnInit{
  
  loading : boolean = false;
  description : string = '';
  constructor (
    public dialogRef: MatDialogRef<CreateSprintBackLogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sprintname : string , backlog_id : number },
    private sprintService : SprintServiceService
  ) {}
  
  
  ngOnInit(): void {
    console.log("sprint name " , this.data.sprintname , "project_id " , this.data.backlog_id);
  }

  createSprintBackLog() {
    this.loading = true;
    const data = {
      backlog_id: this.data.backlog_id,
      description: this.description,
      sprintname: this.data.sprintname
    };

    this.sprintService.createSprint(data).subscribe({
      next: (response: any) => {
        this.loading = false;
        location.reload();
      },
      error: (error: any) => {
        this.loading = false;
        console.log("error creating sprint", error);
      }
    });
  }
}
