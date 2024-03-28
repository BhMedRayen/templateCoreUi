import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';
import { TeamModule } from '../../models/teams/teams.module';
import { RouterModule } from '@angular/router';
import { ButtonModule, ModalModule, } from '@coreui/angular';
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
  projectsWithTasks: any[] = [];

  constructor(private projectsModule: ProjectsModule, private teamModule: TeamModule) {} 
 
  toggleAllUndoneProjects() {
    this.showAllUndoneProjects = !this.showAllUndoneProjects;
    if (this.showAllUndoneProjects) {
        this.undoneProjects = this.projectsModule.projects.filter(project => !project.done).slice(0, 6);
    } else {
        this.undoneProjects = this.projectsModule.projects.filter(project => !project.done);
    }
}

ngOnInit(): void {
    this.totalProjects = this.projectsModule.projects.length;
    this.doneProjects = this.projectsModule.projects.filter(project => project.done).length;
    this.undoneProjects = this.projectsModule.projects.filter(project => !project.done)
    this.numberOfTeams = this.teamModule.teams.length;
    this.projectsDoneByTeams = this.teamModule.teams.reduce((total: number, team: any) => total + team.projects.filter((project: any) => project.done).length, 0);
    this.totalBacklogs = this.projectsModule.projects.filter(project => project.backlog).length;
    this.doneBacklogs = this.projectsModule.projects.filter(project => project.backlog && project.backlog.doneTasks === project.backlog.allTasks).length;

    this.projectsWithTasks = this.projectsModule.projects.map(project => ({
      ...project,
      allTasks: project.backlog?.allTasks || 0, 
      doneTasks: project.backlog?.doneTasks || 0 
    }));

}

}
