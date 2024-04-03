import { NgModule } from '@angular/core';
import {ProjectsRoutingModule } from './projects-routing.module'
import { Project } from '../models/project/project.model'; 
import { CommonModule } from '@angular/common'; 
import { Backlog } from '../models/backlog/backlog.model';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { UserModule } from '../models/Users/User.module'
import { User } from '../models/Users/User.model';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    ProjectsRoutingModule,
    ButtonModule,
    ModalModule , 
    RouterModule,
    UserModule
  ],
  declarations: [

  ],

})
export class ProjectsModule {
  projects: Project [] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot' , ''],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 1,
        projectId: 1,
        title: 'Backlog for Project 1',
        description: 'Description for Backlog 1',
        allTasks: 132,
        doneTasks: 132
      }
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2  Description for Project 2 Description for Project 2 Description for Project 2 Description for Project 2 Description for Project 2 Description for Project 2 Description for Project 2 Description for Project 2 Description for Project 2',
      technologies: ['React', 'Node' ,'Spring'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 2,
        projectId: 2,
        title: 'Backlog for Project 2',
        description: 'Description for Backlog 2',
        allTasks: 150,
        doneTasks: 40
      }
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description for Project 3',
      technologies: ['Vue.js', 'Express'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 3,
        projectId: 3,
        title: 'Backlog for Project 3',
        description: 'Description for Backlog 3',
        allTasks: 120,
        doneTasks: 120
      }
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description for Project 4',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 4,
        projectId: 4,
        title: 'Backlog for Project 4',
        description: 'Description for Backlog 4',
        allTasks: 100,
        doneTasks: 25
      }
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description for Project 5',
      technologies: ['React', 'Node.js'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 5,
        projectId: 5,
        title: 'Backlog for Project 5',
        description: 'Description for Backlog 5',
        allTasks: 180,
        doneTasks: 180
      }
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description for Project 6',
      technologies: ['Vue.js', 'Express'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 6,
        projectId: 6,
        title: 'Backlog for Project 6',
        description: 'Description for Backlog 6',
        allTasks: 200,
        doneTasks: 200
      }
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'Description for Project 7',
      technologies: ['React', 'Spring Boot'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 7,
        projectId: 7,
        title: 'Backlog for Project 7',
        description: 'Description for Backlog 7',
        allTasks: 150,
        doneTasks: 150
      }
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'Description for Project 8',
      technologies: ['Angular', 'Node.js'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 8,
        projectId: 8,
        title: 'Backlog for Project 8',
        description: 'Description for Backlog 8',
        allTasks: 120,
        doneTasks: 90
      }
    },
    {
      id: 9,
      title: 'Project 9',
      description: 'Description for Project 9',
      technologies: ['React', 'Express'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 9,
        projectId: 9,
        title: 'Backlog for Project 9',
        description: 'Description for Backlog 9',
        allTasks: 200,
        doneTasks: 200
      }
    },

    {
      id: 10,
      title: 'Project 10',
      description: 'Description for Project 10',
      technologies: ['Vue.js', 'Spring Boot'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 10,
        projectId: 10,
        title: 'Backlog for Project 10',
        description: 'Description for Backlog 10',
        allTasks: 100,
        doneTasks: 100
      }
    },

    {
      id: 11,
      title: 'Project 11',
      description: 'Description for Project 11',
      technologies: ['Angular', 'Express'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 11,
        projectId: 11,
        title: 'Backlog for Project 11',
        description: 'Description for Backlog 11',
        allTasks: 80,
        doneTasks: 50
      }
    },

    {
      id: 12,
      title: 'Project 12',
      description: 'Description for Project 12',
      technologies: ['Angular', 'Node.js'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 12,
        projectId: 12,
        title: 'Backlog for Project 12',
        description: 'Description for Backlog 12',
        allTasks: 90,
        doneTasks: 60
      }
    },
    {
      id: 13,
      title: 'Project 13',
      description: 'Description for Project 13',
      technologies: ['React', 'Express'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 13,
        projectId: 13,
        title: 'Backlog for Project 13',
        description: 'Description for Backlog 13',
        allTasks: 110,
        doneTasks: 110
      }
    },
    {
      id: 14,
      title: 'Project 14',
      description: 'Description for Project 14',
      technologies: ['Vue.js', 'Spring Boot'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 14,
        projectId: 14,
        title: 'Backlog for Project 14',
        description: 'Description for Backlog 14',
        allTasks: 80,
        doneTasks: 30
      }
    },
    {
      id: 15,
      title: 'Project 15',
      description: 'Description for Project 15',
      technologies: ['Angular', 'Node.js'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 15,
        projectId: 15,
        title: 'Backlog for Project 15',
        description: 'Description for Backlog 15',
        allTasks: 95,
        doneTasks: 95
      }
    },
    {
      id: 16,
      title: 'Project 16',
      description: 'Description for Project 16',
      technologies: ['React', 'Spring Boot'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 16,
        projectId: 16,
        title: 'Backlog for Project 16',
        description: 'Description for Backlog 16',
        allTasks: 120,
        doneTasks: 70
      }
    },
    {
      id: 17,
      title: 'Project 17',
      description: 'Description for Project 17',
      technologies: ['Vue.js', 'Express'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 17,
        projectId: 17,
        title: 'Backlog for Project 17',
        description: 'Description for Backlog 17',
        allTasks: 150,
        doneTasks: 150
      }
    },
    {
      id: 18,
      title: 'Project 18',
      description: 'Description for Project 18',
      technologies: ['Angular', 'Node.js'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 18,
        projectId: 18,
        title: 'Backlog for Project 18',
        description: 'Description for Backlog 18',
        allTasks: 85,
        doneTasks: 40
      }
    },
    {
      id: 19,
      title: 'Project 19',
      description: 'Description for Project 19',
      technologies: ['React', 'Express'],
      done: true,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 19,
        projectId: 19,
        title: 'Backlog for Project 19',
        description: 'Description for Backlog 19',
        allTasks: 100,
        doneTasks: 100
      }
    },
    {
      id: 20,
      title: 'Project 20',
      description: 'Description for Project 20',
      technologies: ['Vue.js', 'Spring Boot'],
      done: false,
      employeeIds: [1, 2, 3, 4, 5, 6] ,
      backlog: {
        id: 20,
        projectId: 20,
        title: 'Backlog for Project 20',
        description: 'Description for Backlog 20',
        allTasks: 130,
        doneTasks: 80
      }
    },
    
  ];


  constructor() {  }


}
