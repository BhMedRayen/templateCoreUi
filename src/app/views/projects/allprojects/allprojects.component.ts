import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-allprojects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './allprojects.component.html',
  styleUrl: './allprojects.component.scss'
})
export class AllprojectsComponent implements OnInit{
 
  allProjects: any[] = [];
  showAllProjects: boolean = false;
  displayedProjects: number = 6;
  projectsWithTasks: any[] = [];
  constructor(private projectsModule: ProjectsModule) {
    this.allProjects = projectsModule.projects;
  }

  toggleAllProjects(): void {
    this.showAllProjects = !this.showAllProjects;
    if (!this.showAllProjects) {
      this.displayedProjects = 6; 
    }
  }
  ngOnInit(): void {
    this.projectsWithTasks = this.projectsModule.projects.map(project => ({
      ...project,
      allTasks: project.backlog?.allTasks || 0, 
      doneTasks: project.backlog?.doneTasks || 0 
    }));


  }
  
}
