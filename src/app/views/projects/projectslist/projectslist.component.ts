import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import {ProjectsService} from "../../../services/projects.service";
import {Project} from "../../../models/project.model";
import {Team} from "../../../models/teams.model";
import { TeamServiceService } from "../../../services/team-service.service";
import { Task } from '../../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { DeleteprojectComponent } from '../deleteproject/deleteproject.component';
import { UpdateprojectComponent } from '../updateproject/updateproject.component'
import {Subscription} from "rxjs";



@Component({
  selector: 'app-projectslist',
  standalone: true,
  imports: [
  CommonModule ,
  RouterModule,
  ModalModule,
  ButtonModule
  ],
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.scss']
})

export class ProjectslistComponent implements OnInit {
  projects: Project[] = [];
  AllProjects : Project [] = [];
  doneProjects : Project [] = [];
  allTeams : Team[]= [];
  isProjectsLoading: boolean = false;
  tasksMap: { [projectId: number]: Task[] } = {};
  teamsMap: { [projectId: number]: string } = {};

  projectsSub: Subscription | undefined;
  unDoneProjectsSub: Subscription | undefined;



  constructor(
    private projectsService: ProjectsService,
    private teamService: TeamServiceService,
    public dialog: MatDialog
    ) {}


    openCreateProjectDialog(): void {
      const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
        width: '500px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
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

    openDeleteProjectDialog(projectId:number): void {
      const dialogRef = this.dialog.open(DeleteprojectComponent,{
        width:'500px',
        data: { projectId: projectId }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      })
    }




ngOnInit(): void {

  this.isProjectsLoading = true;
  this.getAllProjects();
  this.getDoneProjects();
  this.getAllTeams();
  this.projectsService.fetchUnDoneProject()
  this.unDoneProjectsSub = this.projectsService.getUndoneProjectsUpdateListener().subscribe({
    next: (projects: any) => {
      this.projects = projects;
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
getAllTasksCount(projectId: number): number {
  return this.tasksMap[projectId] ? this.tasksMap[projectId].length : 0;
}

getDoneTasksCount(projectId: number): number {
  if (!this.tasksMap[projectId]) return 0;
  return this.tasksMap[projectId].filter(task => task.status === 'done').length;
}

getTeamName(projectId: number): string {
  return this.teamsMap[projectId] || 'No team assigned';
}

  getAllProjects() : void {
    this.projectsService.getAllProjects().subscribe({
      next:(response : any) => {
        this.AllProjects=response.projects;
      }
    })
  }

getDoneProjects() : void {
  this.projectsService.getDoneProjects().subscribe({
    next:(response:any)=>
      this.doneProjects=response.projects
  });
}

getAllTeams() : void {
  this.teamService.getAllTeams().subscribe({
    next:(response:any)=>{
      this.allTeams=response.teams
    }
  })
}


}
