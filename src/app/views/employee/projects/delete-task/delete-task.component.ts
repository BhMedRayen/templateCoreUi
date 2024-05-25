import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.scss'
})
export class DeleteTaskComponent implements OnInit{
  
  
  loading : boolean = false
  constructor (
    public dialogRef: MatDialogRef<DeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number },
    private taskService : TasksService 
  ) {}
  
  ngOnInit(): void {
   console.log("task id " , this.data.taskId);
   
  }
  onCancelClick() {
    this.dialogRef.close()
  }

  onDeleteClick() {
    this.loading=true 
    this.taskService.deleteTask(this.data.taskId).subscribe({
      next : (response : any)=> {
        this.loading=false
        console.log(response);
        location.reload()
        this.dialogRef.close()
      },
      error : (error : any)=> {
        this.loading=false
        console.log("error deleting task",error);
      }
    })
  }
}
