import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SprintServiceService {

  private apiUrl = 'http://localhost:8000/api/sprints';

  constructor(
    private http: HttpClient
    ) { }

    createSprint(sprintData : any) : Observable <any> {
      return this.http.post(this.apiUrl+'/create',sprintData);
    }
    
    getSprintsByProjectId(projectId : number) : Observable <any> {
      return this.http.get(`${this.apiUrl}/backlogs/${projectId}`)
    }
}
