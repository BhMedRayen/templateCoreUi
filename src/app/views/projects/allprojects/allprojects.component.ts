import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProjectsService} from "../../../services/projects.service";
import {Project} from "../../../models/project.model";

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

  projects: Project[] = [];

  allProjects: any[] = [];
  showAllProjects: boolean = false;
  displayedProjects: number = 6;

  isProjectsLoading: boolean = false;

  constructor(private projectsModule: ProjectsModule, private projectsService: ProjectsService) {

  }

  toggleAllProjects(): void {
    this.showAllProjects = !this.showAllProjects;
    if (!this.showAllProjects) {
      this.displayedProjects = 6;
    }
  }
  ngOnInit(): void {
    this.isProjectsLoading = true; // Set loading flag to true before fetching data

    this.projectsService.getAllProjects().subscribe({
      next: (projects: any) => {
        this.projects = projects;
        this.isProjectsLoading = false; // Set loading flag to false after fetching data
      },
      error: (error: any) => {
        console.error(error);
        this.isProjectsLoading = false; // Set loading flag to false if there's an error
      },
    });

  }

}
