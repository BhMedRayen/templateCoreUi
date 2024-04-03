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
    // Define your users here
    {
      id: 1,
      firstName: 'Ben Hassine',
      lastName: 'Mohamed Rayen',
      email: 'rayen@gmail.com.com',
      password: 'password123',
      isEmp: true // Assuming all users are employees by default
    },
    {
        id: 2,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id: 3,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password333',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id:4,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id: 5,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id: 6,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id: 7,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id: 8,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id: 9,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true // Assuming all users are employees by default
      },
      {
        id: 10,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true // Assuming all users are employees by default
      },
    // Add more users as needed
  ];

}
