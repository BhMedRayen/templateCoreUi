import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { MatDialog } from '@angular/material/dialog';
import {CreateTaskComponent} from '../create-task/create-task.component'
import {DeleteTaskComponent} from '../delete-task/delete-task.component'
import {UpdateTaskComponent} from '../update-task/update-task.component'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    
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
  emplId : number = 0 
  user : any 
  teamMembers : any [] = []
  loading : boolean = false 

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService,
    private teamService : TeamServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sprintId = parseInt(params.get('sprintId') ?? '0', 10);
      this.scrum_master_id = parseInt(params.get('scrum_master_id') ?? '0', 10);
      this.teamid=parseInt(params.get('teamid') ?? '0' , 10)
      this.getTeamById(this.teamid)
      this.getTaskBySprintId();
    });
    const userData = localStorage.getItem('employee');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log("user auth ", this.user);
    } else {
      console.error('User data not found in local storage.');
    }
    this.emplId = this.user.id;


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
    this.loading=true
    this.taskService.changeTaskStatus(taskId).subscribe({
      next: (response: any) => {
        console.log("Task status changed", response);
        this.getTaskBySprintId(); 
        this.loading=false
      },
      error: (error: any) => {
        console.log("Error changing task status", error);
        this.loading=false
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


 openCreateTask() : void {
   const dialogRef = this.dialog.open(CreateTaskComponent,{
     width : '500px',
     data :  {sprintId : this.sprintId}
   })
 }
  
 openDeleteTask(taskId : number ) : void {
  const dialogRef  = this.dialog.open(DeleteTaskComponent, {
        width : '500px',
        data : {taskId : taskId}
   })
 }
 openUpdateTask( taskId : number, description : string ) : void {
  const dialogRef  = this.dialog.open(UpdateTaskComponent, {
        width : '500px',
        data : {taskId : taskId , description : description}
   })
 }
}
