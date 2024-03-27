import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../../models/project/projects.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-allprojects',
  standalone: true,
  imports: [CommonModule],
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
