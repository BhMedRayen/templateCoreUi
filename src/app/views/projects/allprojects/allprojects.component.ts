import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProjectsService} from "../../../services/projects.service";
import {Project} from "../../../models/project.model";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Task } from '../../../models/task.model';
import { Team } from 'src/app/models/teams.model';
import { TeamServiceService } from "../../../services/team-service.service";
import { DeleteprojectComponent } from '../deleteproject/deleteproject.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateprojectComponent } from '../updateproject/updateproject.component';



@Component({
  selector: 'app-allprojects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './allprojects.component.html',
  styleUrl: './allprojects.component.scss'
})
export class AllprojectsComponent implements OnInit{

  projects: Project[] = [];
  tasksMap: { [projectId: number]: Task[] } = {};
  teamsMap: { [projectId: number]: string } = {};

  allProjects: any[] = [];
  showAllProjects: boolean = false;
  displayedProjects: number = 6;

  isProjectsLoading: boolean = false;

  constructor(
    private projectsModule: ProjectsModule,
    private projectsService: ProjectsService,
    private teamService: TeamServiceService,
    public dialog: MatDialog
    ) {}

    ngOnInit(): void {
      this.isProjectsLoading = true;
      this.projectsService.getAllProjects().subscribe({
      next: (response: any) => {
        this.projects = response.projects;
        this.fetchTasksAndTeamsForProjects();
      },
      error: (error: any) => {
        console.error('Error fetching projects:', error);
        this.isProjectsLoading = false;
      }
    });
  
    }

    fetchTasksAndTeamsForProjects(): void {
      this.projects.forEach(project => {
        this.projectsService.getProjectTasks(project.id).subscribe({
          next: (response: any) => {
            this.tasksMap[project.id] = response.tasks;
            this.fetchTeamForProject(project.id);
          },
          error: (error: any) => {
            console.error(`Error fetching tasks for project ${project.id}:`, error);
          },
          complete: () => {
            const allTasksFetched = Object.keys(this.tasksMap).length === this.projects.length;
            if (allTasksFetched) {
              this.isProjectsLoading = false;
            }
          }
        });
      });
    }
  
  
    getAllTasksCount(projectId: number): number {
      return this.tasksMap[projectId] ? this.tasksMap[projectId].length : 0;
    }
  
    getDoneTasksCount(projectId: number): number {
      if (!this.tasksMap[projectId]) return 0;
      return this.tasksMap[projectId].filter(task => task.status === 'done').length;
    }

    fetchTeamForProject(projectId: number): void {
      this.teamService.getTeamByProjectId(projectId).subscribe({
        next: (team: any) => {
          this.teamsMap[projectId] = team.team.team_name;
        },
        error: (error: any) => {
          console.error(`Error fetching team for project ${projectId}:`, error);
        }
      });
    }
    getTeamName(projectId: number): string {
      return this.teamsMap[projectId] || 'No team assigned';
    }

    
    openDeleteProjectDialog(projectId:number): void {
      const dialogRef = this.dialog.open(DeleteprojectComponent,{
        width:'500px',
        data: { projectId: projectId } 
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      })
    }

    openUpdateProjectDialog(projectId:number): void {
      console.log("open project update");
      const dialogRef = this.dialog.open(UpdateprojectComponent, {
        width: '500px',
        data: { projectId: projectId } 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  

  }





