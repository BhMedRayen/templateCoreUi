

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
  private tasks : Task[] = [];

  private projectsSubject: Subject<Project[]> = new Subject<Project[]>();

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
  

  

}
