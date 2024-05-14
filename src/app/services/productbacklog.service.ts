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
  
  
}
