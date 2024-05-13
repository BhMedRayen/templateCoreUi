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


}