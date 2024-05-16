

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable, of, Subject, tap} from 'rxjs';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersSubject: Subject<User[]> = new Subject<User[]>();

  private apiUrl = 'http://localhost:8000/api/users/get-all';

  constructor(private http: HttpClient) { }


  // Retrieve a user by ID from the subject
  getUserById(userId: number): Observable<User | undefined> {
    return this.usersSubject.pipe(
      map(users => users.find(user => user.id === userId))
    );
  }


  // Commented out for fake data generation
  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  // Generate fake users with a delay
  getAllUsers(): Observable<User[]> {
    const fakeUsers: User[] = [];
    for (let i = 1; i <= 10; i++) {
      const fakeUserData = {
        id: i,
        first_name: `Fake User ${i}`,
        last_name: `This is a fake user with ID ${i}`,
        email: `alire@mail.com${i}`,
        is_emp: true,
        role: true,
      };
      fakeUsers.push(new User(fakeUserData));
    }
    // Delay the response for demonstration
    return of(fakeUsers).pipe(
      delay(3000),
      tap(users => this.usersSubject.next(users))
  );
  }

 

}
