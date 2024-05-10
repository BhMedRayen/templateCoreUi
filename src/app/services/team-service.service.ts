import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/teams.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  private apiUrl = 'http://localhost:8000/api/teams';

  constructor(private http: HttpClient) { }

  getTeamByProjectId(id : number) : Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/get-team-by-backlog/${id}`);
  }
  

}
