
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './task.model'

@NgModule({
    imports: [
      CommonModule
    ],
    providers: []
  })
  export class TaskModule {
    static tasks: Task[] = [
      {
        id : 1,
        title: 'Task 1',
        description: 'Description for Task 1',
        assignedTo: 1,
        status: true,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
      {
        id : 2,
        title: 'Task 2',
        description: 'Description for Task 2',
        assignedTo: 2,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
      {
        id : 3,
        title: 'Task 3',
        description: 'Description for Task 3',
        assignedTo: 3,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
      {
        id : 4,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
      {
        id : 5,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
     
      {
        id : 6,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
     
      {
        id : 6,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
     
      {
        id : 7,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
     
      {
        id : 8,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
     
      {
        id : 9,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
     
      {
        id : 10,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 1
      },
     
      
    ];
  }