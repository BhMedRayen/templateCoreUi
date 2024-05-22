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
  getAllTeams() : Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl+'/get-all-teams');
  }

  createTeam(teamData : any) : Observable<Team> {
    return this.http.post<Team>(`${this.apiUrl}/create`,teamData)
  }
  
  deleteTeam(id:number) : Observable<Team> {
    return this.http.delete<Team>(`${this.apiUrl}/delete/${id}`)
  }
  
  getTeamById(id:number) : Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/get-team-by-id/${id}`)
  }

  assignTeamToBacklog(backlogId: number, teamId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/backlogs/${backlogId}/assign-team/${teamId}`, {});
  }

  deleteTeamMembre(teamId : number , userId : number ) : Observable<any> {
    return this.http.delete<any> (`${this.apiUrl}/delete-team-membre/${teamId}/${userId}`)
  }

  changeScrumMaster(teamId : number , userId : number ) : Observable <any> {
    return this.http.put<any> ((`${this.apiUrl}/${teamId}/change-scrum-master/${userId}`),'')
  }
  addTeamMember(teamId: number, userIds: number[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${teamId}/add-member`, { user_ids: userIds });
  }
  getEligibleUsers(teamId : number ) : Observable<any> {
    return this.http.get<any>(`http://localhost:8000/api/user/eligible-users/${teamId}`)
  }

  getUserTeams(userId : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user-teams/${userId}`)
  }

  getProjectByTeamId(teamId : number) : Observable <any> {
    return this.http.get<any>(`${this.apiUrl}/get-project/${teamId}`)
  }

}
