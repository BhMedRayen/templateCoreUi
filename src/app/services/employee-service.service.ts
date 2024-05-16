import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private apiUrl ='http://localhost:8000/api/user'


  constructor(private http: HttpClient) { }

  getConfirmedEmp() : Observable <User[]>  {
    return this.http.get<User[]>(this.apiUrl+'/confirmed')
  }

  deleteUser(userId : number) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${userId}`)
  } 
  
  getUnConfirmedEmp() : Observable <User[]>  {
    return this.http.get<User[]>(this.apiUrl+'/unconfirmed')
  }

  confirmEmpRequest (empId : number) : Observable <User> {
    return this.http.put<User>(`${this.apiUrl}/confirm/${empId}`, '');
  }


}
