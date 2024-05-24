import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://localhost:8000/api/tasks';

  constructor(private http: HttpClient) { }

  createTask(taskData: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/create", taskData);
  }

  getTsksBySprintId(sprintId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sprint/${sprintId}`);
  }

  changeTaskStatus(taskId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${taskId}/toggle-status`, '');
  }

  getTasksForUser(userId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/user/' + userId);
  }
}
