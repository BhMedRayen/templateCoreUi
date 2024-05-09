import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private apiUrl = 'http://localhost:8000/api/projects/get-all';
  private doneProjectsUrl = 'http://localhost:8000/api/projects/done-projects';
  private allTeamsUrl = 'http://localhost:8000/api/teams/get-all-teams'
  private undoneProjectsUrl ='http://localhost:8000/api/projects/active-projects'
  private projectTasksUrl = 'http://localhost:8000/api/projects/project-tasks/';

  constructor(private http: HttpClient) { }

  getProjectTasks(projectId: number): Observable<any> {
    const url = `${this.projectTasksUrl}${projectId}`;
    return this.http.get<any>(url);
  }

  getAllProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
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
