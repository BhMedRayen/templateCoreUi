import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { ProjectService } from '../services/projectlistservices/project.service';
import { forEach } from 'lodash-es';

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

  totalProjects: number =0;
  doneProjects: number =0;
  undoneProjects: any[] = [];
  showAllUndoneProjects: boolean = false;
  numberOfTeams: number = 0;
  projectsDoneByTeams: number = 0;
  totalBacklogs: number = 0;
  doneBacklogs: number = 0;
  undoneTasksCount: number = 0;


  constructor(private projectService: ProjectService) {}

  toggleAllUndoneProjects() {
    this.showAllUndoneProjects = !this.showAllUndoneProjects;
    if (this.showAllUndoneProjects) {
      this.projectService.getUndoneProjects().subscribe(response => {
        this.undoneProjects = response.projects;
      });
    } else {
      this.projectService.getUndoneProjects().subscribe(response => {
        this.undoneProjects = response.projects.slice(0, 6);
      });
    }
}


  getProjectTasks(ProjectId :number) {
    return this.projectService.getProjectTasks(ProjectId);
  }

  countUndoneTasks(project: any): number {
    if (!project || !project.tasks) return 0;

    return project.tasks.filter((task: any) => task.status === 'undone').length;
}


ngOnInit(): void {

    this.projectService.getAllProjects().subscribe(response => {
      this.totalProjects = response.projects.length;
      this.totalBacklogs = response.projects.length;
      this.projectsDoneByTeams = response.projects.length;
    });

    this.projectService.getDoneProjectsCount().subscribe(response => {
      this.doneProjects = response.projects.length;
      this.doneBacklogs = response.projects.length;
    });

    this.projectService.getAllteams().subscribe(response => {
      this.numberOfTeams = response.teams.length;
    })
    this.projectService.getUndoneProjects().subscribe(response => {
      this.undoneProjects = response.projects;
      this.undoneProjects.forEach(project => {
        this.projectService.getProjectTasks(project.id).subscribe(taskResponse => {
          project.tasks = taskResponse.tasks;
          const undoneTasks = project.tasks.filter((task: any) => task.status === 'undone');
          this.undoneTasksCount += undoneTasks.length;

        });
      });
    });

}

}
