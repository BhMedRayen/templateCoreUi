import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  scrum_master_id: number = 0;
  sprintId: number = 0;
  teamId : number = 0 ;
  tasks: any[] = [];
  displayedColumns: string[] = ['id', 'description', 'status', 'assigned_user_id', 'created_at', 'updated_at'];
  loadingTaskId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sprintId = parseInt(params.get('sprintId') ?? '0', 10);
      this.scrum_master_id = parseInt(params.get('scrum_master_id') ?? '0', 10);
      this.teamId=parseInt(params.get('teamId') ?? '0' , 10)
      this.getTaskBySprintId();
    });
  }
  
  getTaskBySprintId(): void {
    this.taskService.getTsksBySprintId(this.sprintId).subscribe({
      next: (response: any) => {
        this.tasks = response.tasks;
        console.log("tasks ", this.tasks);
      },
      error: (error: any) => {
        console.log("error fetching tasks ", error);
      }     
    });
  }

  changeTaskStatus(taskId: number): void {
    this.loadingTaskId = taskId;
    this.taskService.changeTaskStatus(taskId).subscribe({
      next: (response: any) => {
        console.log("Task status changed", response);
        this.getTaskBySprintId(); 
        this.loadingTaskId = null;
      },
      error: (error: any) => {
        console.log("Error changing task status", error);
        this.loadingTaskId = null;
      }
    });
  }
}
