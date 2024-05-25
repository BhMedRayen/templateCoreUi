  import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
  import { TasksService } from 'src/app/services/tasks.service';

  @Component({
    selector: 'app-create-task',
    standalone: true,
    imports: [
      FormsModule,
      CommonModule
    ],
    templateUrl: './create-task.component.html',
    styleUrl: './create-task.component.scss'
  })
  export class CreateTaskComponent implements OnInit {
    description : String = ""
    loading : boolean = false 
    constructor (
      public dialogRef: MatDialogRef<CreateTaskComponent>,
      @Inject(MAT_DIALOG_DATA)  public data: {  sprintId : number },
      private taskService : TasksService
    ) {}
    
    
    ngOnInit(): void {
     console.log("sprint id " , this.data.sprintId);
     
    }

    createTask() : void {
     this.loading = true 
     const data = {
          description: this.description,
          sprint_id : this.data.sprintId
        }
      this.taskService.createTask(data).subscribe({
        next : (response : any )=> {
          this.loading=false
          console.log("task created succefully ",response);
          this.dialogRef.close();
          location.reload();
        },
        error : (error : any)=> {
          this.loading=false
          console.log("error creaing task",error);
        }
      })

    } 


  }
