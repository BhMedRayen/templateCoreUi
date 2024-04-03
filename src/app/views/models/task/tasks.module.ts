
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
        status: false,
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
        sprintId: 2
      },
      {
        id : 3,
        title: 'Task 3',
        description: 'Description for Task 3',
        assignedTo: 3,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 3
      },
      {
        id : 4,
        title: 'Task 4',
        description: 'Description for Task 4',
        assignedTo: 4,
        status: false,
        dueDate: new Date('2024-04-05'),
        sprintId: 4
      },
     
    ];
  }