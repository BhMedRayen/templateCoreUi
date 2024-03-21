import { Component } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-allprojects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allprojects.component.html',
  styleUrl: './allprojects.component.scss'
})
export class AllprojectsComponent {
 
  allProjects: any[] = [];
  showAllProjects: boolean = false;
  displayedProjects: number = 6;
  constructor(private projectsModule: ProjectsModule) {
    this.allProjects = projectsModule.projects;
  }

  toggleAllProjects(): void {
    this.showAllProjects = !this.showAllProjects;
    if (!this.showAllProjects) {
      this.displayedProjects = 6; 
    }
  }
}
