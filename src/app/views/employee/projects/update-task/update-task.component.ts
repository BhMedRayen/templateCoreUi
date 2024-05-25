import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent implements OnInit{

  description : string = ''
  loading : boolean = false 
  taskId : number = 0
  
  constructor (
    public dialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {  taskId : number , description : string  },
    private taskService : TasksService
  ) {}


  
  
  ngOnInit(): void {
    this.description=this.data.description
    this.taskId=this.data.taskId
   
  }

  updateTask() : void {
    this.loading=true
     const description = {
      description : this.description
    }
    this.taskService.updateTask(description,this.taskId).subscribe({
      next : (response : any)=> {
        this.loading=false 
        console.log("task updated succefully" , response);
        this.dialogRef.close()
        location.reload()
      },
      error : (error : any)=> {
        this.loading=false
        console.log("error updating task",error);
      }
    })
  }

}
