import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-assign-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.scss']
})
export class AssignTaskComponent implements OnInit {
  
  team: any;
  users: any[] = [];
  teamId: number = 0;
  scrum_master_id: number = 0;
  selectedUserId: number | null = null;
  loading : boolean = false 

  constructor(
    public dialogRef: MatDialogRef<AssignTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teamId: number, taskId: number },
    private taskService: TasksService,
    private teamService: TeamServiceService
  ) {}
  
  ngOnInit(): void {
    const userData = localStorage.getItem('employee');
    if (userData) {
      const user = JSON.parse(userData);
      this.scrum_master_id = user.id;
      console.log("Scrum master ID:", this.scrum_master_id);
    } else {
      console.error('User data not found in local storage.');
    }
    this.teamId = this.data.teamId;
    this.getTeamById(this.teamId);
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
      }
    });
  }

  assignTask(): void {
    if (this.selectedUserId !== null) {
      this.loading=true
      this.taskService.assignTask(this.data.taskId, this.selectedUserId).subscribe({
        next: (response) => {
          this.loading=false
          console.log('Task assigned successfully', response);
          this.dialogRef.close();
          location.reload()
        },
        error: (error) => {
          this.loading=false
          console.error('Error assigning task', error);
        }
      });
    } else {
      console.error('No user selected');
    }
  }

  selectUser(userId: number): void {
    this.selectedUserId = userId;
  }


  cancel(): void {
    this.dialogRef.close();
  }
}
