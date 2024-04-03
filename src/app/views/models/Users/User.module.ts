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
  static  users: User[] = [
    {
      id: 1,
      firstName: 'Ben Hassine',
      lastName: 'Mohamed Rayen',
      email: 'rayen@gmail.com.com',
      password: 'password123',
      isEmp: true , 
      role : 'Scrum Master'
    },
    {
        id: 2,
        firstName: 'Ben Salah',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true,
        role : 'Front End Developper '
      },
      {
        id: 3,
        firstName: 'Ben AHmed',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password333',
        isEmp: true,
        role : 'Front End Developper '
      },
      {
        id:4,
        firstName: 'Ben Fradj',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true,
        role : 'Back End Developper '
      },
      {
        id: 5,
        firstName: 'Ben Ali',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true,
        role : 'Back End Developper '
      },
      {
        id: 6,
        firstName: 'Beshikh',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password223',
        isEmp: true,
        role : 'Designer'

      },
      {
        id: 7,
        firstName: 'Ben alia',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true,
        role : 'Front End Developper '
      },
      {
        id: 8,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true,
        role : 'Front End Developper '
      },
      {
        id: 9,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true,
        role : 'Front End Developper '
      },
      {
        id: 10,
        firstName: 'Ben Hassine',
        lastName: 'Mohamed Rayen',
        email: 'rayen@gmail.com.com',
        password: 'password123',
        isEmp: true ,
        role : 'Front End Developper '
      },
  ];

}
