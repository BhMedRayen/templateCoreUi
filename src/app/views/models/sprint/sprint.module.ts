
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sprint } from './sprint.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class SprintModule {
  static sprints: Sprint[] = [
    {
     id:1,
      title: 'Sprint 1',
      membersId: [1,2,3,4], 
      tasksId: [1,2,3,4,5], 
      doneStatus: false,
      startTime: new Date('2024-04-01'),
      endTime: new Date('2024-04-10'),
      backlogId: 2
    },
    {
      id:2,
      title: 'Sprint 2',
      membersId: [1,2,3,4], 
      tasksId: [1,2,3,4,5], 
      doneStatus: false,
      startTime: new Date('2024-04-11'),
      endTime: new Date('2024-04-20'),
      backlogId: 2
    },
    { id:3,
        title: 'Sprint 1',
        membersId: [1,2,3,4], 
        tasksId: [1,2,3,4,5], 
        doneStatus: false,
        startTime: new Date('2024-04-01'),
        endTime: new Date('2024-04-10'),
        backlogId: 2
      },
      {
        id:4,
        title: 'Sprint 2',
        membersId: [1,2,3,4], 
        tasksId: [1,2,3,4,5], 
        doneStatus: false,
        startTime: new Date('2024-04-11'),
        endTime: new Date('2024-04-20'),
        backlogId: 2
      }, 
      {
        id:5,
        title: 'Sprint 1',
        membersId: [1,2,3,4], 
        tasksId: [1,2,3,4,5], 
        doneStatus: false,
        startTime: new Date('2024-04-01'),
        endTime: new Date('2024-04-10'),
        backlogId: 2
      },
      {
        id:6,
        title: 'Sprint 2',
        membersId: [1,2,3,4], 
        tasksId: [1,2,3,4,5], 
        doneStatus: false,
        startTime: new Date('2024-04-11'),
        endTime: new Date('2024-04-20'),
        backlogId: 2
      },
   
  ];
}
