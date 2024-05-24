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
import { TeamServiceService } from 'src/app/services/team-service.service';

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
  teamid : number = 0 ;
  tasks: any[] = [];
  team : any
  teamMembers : any [] = []
  displayedColumns: string[] = ['id', 'description', 'status', 'assigned_user_id', 'created_at', 'updated_at'];
  loadingTaskId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService,
    private teamService : TeamServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sprintId = parseInt(params.get('sprintId') ?? '0', 10);
      this.scrum_master_id = parseInt(params.get('scrum_master_id') ?? '0', 10);
      this.teamid=parseInt(params.get('teamid') ?? '0' , 10)
      this.getTeamById(this.teamid)
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


  getTeamById(teamId: number): void {
    this.teamService.getTeamById(teamId).subscribe({
      next: (response: any) => {
        this.team = response.team;
        if (this.team && this.team.users) {
          this.team.users.forEach((teamMember: any) => {
            if (teamMember.photo) {
              teamMember.photo = 'http://localhost:8000' + teamMember.photo;
            }
          });
        }
        console.log("team", this.team);
        console.log("Users:", this.team?.users);
      },
      error: (error: any) => {
        console.log('Error fetching team:', error);
      },
      complete: () => {}
    });
  }

}
