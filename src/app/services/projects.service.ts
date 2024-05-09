

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable, of, Subject, Subscription, tap} from 'rxjs';
import {Project} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = []; // Variable to store the latest projects

  private projectsSubject: Subject<Project[]> = new Subject<Project[]>();

  private apiUrl = 'http://localhost:8000/api/projects/get-all';
  private doneProjectsUrl = 'http://localhost:8000/api/projects/done-projects';
  private allTeamsUrl = 'http://localhost:8000/api/teams/get-all-teams'
  private undoneProjectsUrl ='http://localhost:8000/api/projects/active-projects'
  private projectTasksUrl = 'http://localhost:8000/api/projects/project-tasks/';

  constructor(private http: HttpClient) {

  }


  // Retrieve a project by ID from the subject
  getProjectById(projectId: number): Project | undefined {
    return this.projects.find(project => project.id === projectId);
  }

  // Method to update the latest projects and emit them
  private updateProjects(projects: Project[]): void {
    this.projects = projects;
    this.projectsSubject.next([...projects]);
  }

  getProjectTasks(projectId: number): Observable<any> {
    const url = `${this.projectTasksUrl}${projectId}`;
    return this.http.get<any>(url);
  }


  // Commented out for fake data generation
  // getAllProjects(): Observable<Project[]> {
  //   return this.http.get<Project[]>(this.apiUrl);
  // }

  // Generate fake projects with a delay
  getAllProjects(): Observable<Project[]> {
    const fakeProjects: Project[] = [];
    for (let i = 1; i <= 10; i++) {
      const fakeProjectData = {
        id: i,
        projectname: `Fake Project ${i}`,
        description: `This is a fake project with ID ${i}`,
        technologies: '["Fake Technology 1", "Fake Technology 2"]',
        product_owner_id: i, // Assuming product owner ID is the same as project ID for fakes
        updated_at: '2024-05-09T13:22:32.000000Z',
        created_at: '2024-05-09T13:22:32.000000Z',
        backlog_id: i,
        backlog: {
          backlog: `Fake Project ${i} Backlog`,
          description: `Backlog for the fake project ${i}`,
          updatedAt: '2024-05-09T13:22:32.000000Z',
          createdAt: '2024-05-09T13:22:32.000000Z',
          id: i
        }
      };
      fakeProjects.push(new Project(fakeProjectData));
    }
    this.updateProjects(fakeProjects);
    return of(fakeProjects).pipe(
      delay(3000)
    );
  }
  getDoneProjectsCount(): Observable<any> {
    return this.http.get<any>(this.doneProjectsUrl);
  }
  getAllteams () : Observable<any> {
    return this.http.get<any>(this.allTeamsUrl);
  }
  getUndoneProjects () : Observable<any> {
    return this.http.get<any>(this.undoneProjectsUrl);
  }

}
