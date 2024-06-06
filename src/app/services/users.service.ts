

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable, of, Subject, tap} from 'rxjs';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private usersSubject: Subject<User[]> = new Subject<User[]>();

  private apiUrl = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) { }


  getUserById(userId : number ) : Observable<any>  {
   return this.http.get<any>('http://localhost:8000/api/user/get-user-by-id/'+userId) 
  }

  getProductOwner() : Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/user/product-owner')
  }

  getAallClients() : Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/user/get-all-clients')
  }

  updateUserData (userData : any) : Observable <any> {
    return this.http.put<any>('http://localhost:8000/api/user/update-user-data',userData)
  }
  updatePhoto(userId: number, photo: any): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.put<any>(`${this.apiUrl}/update-photo/${userId}`, formData);
  }




  logIn(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }






 

}
