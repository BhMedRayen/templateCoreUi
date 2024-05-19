

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable, of, Subject, Subscription, tap} from 'rxjs';
import {Project} from "../models/project.model";
import {Task} from "../models/task.model";
import { Team } from "../models/teams.model"
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [];

  private undoneProjects: Project[] = [];
  private tasks : Task[] = [];

  private projectsUpdated = new Subject<Project[]>();
  private undoneProjectsUpdated = new Subject<Project[]>();


  private apiUrl = 'http://localhost:8000/api/projects';

  constructor(private http: HttpClient) { }
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl+'/get-all');
  }

  getProjectTasks(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/project-tasks/${id}`);
  }

  getUnDoneProject() : Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl+'/active-projects')
  }

  getDoneProjects() : Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl+'/done-projects')
  }

  createProject(projectData: any): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/create`, projectData);
  }

  getProjectById(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/get-by-id/${projectId}`).pipe(
      tap((response: any) => {
        console.log('Response from getProjectById:', response);
      }),
      map((response: any) => {
        response.project.technologies = JSON.parse(response.project.technologies);
        return response;
      })
    );
  }

  deleteProject(projectId:number) : Observable<Project> {
    return this.http.delete<Project>(`${this.apiUrl}/delete/${projectId}`)
  }

  updateProject(projectId: number, projectData: any): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/update/${projectId}`, projectData);
  }

  getBackLogById(backlogId : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-backlog-by-id/${backlogId}`)
  }


  fetchUnDoneProject() {
    this.http.get<Project[]>(this.apiUrl+'/active-projects')
      .subscribe({
        next: (responseData: any) => {
          this.undoneProjects = responseData.projects;
          if (responseData.projects.length === 0) {
            this.undoneProjectsUpdated.next([]); // Emit notes changes
          } else {
            this.undoneProjectsUpdated.next([...this.undoneProjects]); // Emit notes changes
          }
        },
        error: (error: any) => {
          console.error('Error fetching active projects:', error);
        }
      });
  }

  getProjectsUpdateListener() {
    return this.projectsUpdated.asObservable();
  }

  getUndoneProjectsUpdateListener() {
    return this.undoneProjectsUpdated.asObservable();
  }

  fetchAllProjects() {
    this.http.get<Project[]>(this.apiUrl+'/get-all')
      .subscribe({
        next: (responseData: any) => {
          this.projects = responseData.projects;

          if (responseData.projects.length === 0) {
            this.projectsUpdated.next([]); // Emit notes changes
          } else {
            this.projectsUpdated.next([...this.projects]); // Emit notes changes
          }
        },
        error: (error: any) => {
          console.error('Error fetching projects:', error);
        }
      });
  }

}
