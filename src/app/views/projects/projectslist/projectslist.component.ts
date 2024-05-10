import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import {ProjectsService} from "../../../services/projects.service";
import { forEach } from 'lodash-es';
import {Project} from "../../../models/project.model";
import { TeamServiceService } from "../../../services/team-service.service";
import { Task } from '../../../models/task.model';



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
  isProjectsLoading: boolean = false;
  tasksMap: { [projectId: number]: Task[] } = {};
  teamsMap: { [projectId: number]: string } = {};




  constructor(
    private projectsService: ProjectsService,
    private teamService: TeamServiceService
    ) {}







ngOnInit(): void {

  this.isProjectsLoading = true;
  this.projectsService.getDoneProject().subscribe({
  next: (response: any) => {
    this.projects = response.projects;
    console.log(this.projects);
    
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

}