import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductbacklogService {

  private apiUrl ='http://localhost:8000/api/product-backlogs'
  constructor(private http: HttpClient) { }

  getBackLogById(backlogId : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-by-backlog-id/${backlogId}`)
  }

  deleteProductBacklog(sprintId : number) : Observable <any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${sprintId}`)
  }

  createSprint(sprintData:any,backlogId : number) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create/${backlogId}`,sprintData)
  }

  updateSprint(sprintData:any,sprintId:number):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${sprintId}`,sprintData)
  }

  getSprintById(sprintId:number):Observable <any> {
    return this.http.get<any>(`${this.apiUrl}/get-by-id/${sprintId}`)
  }
  

  
}
