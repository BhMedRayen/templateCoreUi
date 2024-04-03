import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './User.model';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  ]
})
export class UserModule {
  users: User[] = [
    {
      id: 1,
      firstName: 'Ben Hassine',
      lastName: 'Mohamed Rayen',
      email: 'rayen@gmail.com.com',
      password: 'password123',
      isEmp: true
    },
    {
        id: 2,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true
      },
      {
        id: 3,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password333',
        isEmp: true
      },
      {
        id:4,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true
      },
      {
        id: 5,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true
      },
      {
        id: 6,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true
      },
      {
        id: 7,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true
      },
      {
        id: 8,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true
      },
      {
        id: 9,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true
      },
      {
        id: 10,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true 
      },
  ];

}
