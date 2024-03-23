import { NgModule } from '@angular/core';
import {ProjectsRoutingModule } from '../../projects/projects-routing.module'
import { Project } from './project.model'; 
import { CommonModule } from '@angular/common'; 


@NgModule({
  imports: [
    CommonModule, 
    ProjectsRoutingModule,
  ],
  declarations: [

  ],

})
export class ProjectsModule {
  projects: Project [] = [
    {
      id : 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: true,
      allTasks : 132,
      doneTasks : 132
    },
    {
      id : 2,
      title: 'Project 2',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 150,
      doneTasks : 40
    },
    {
      id : 3,
      title: 'Project 3',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id : 4,
      title: 'Project 4',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id:5,
      title: 'Project 5',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id : 6,
      title: 'Project 6',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id : 7,
      title: 'Project 7',
      description: 'Description for Project 2',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id :8,
      title: 'Project 8',
      description: 'Description for Project 3',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id:9,
      title: 'Project 9',
      description: 'Description for Project 4',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id : 10,
      title: 'Project 10',
      description: 'Description for Project 5',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id:11,
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id:13,
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id:14,
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      id: 15,
      title: 'Project 1',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks: 100,
      doneTasks: 25
    },
    {
      id: 16,
      title: 'Project 2',
      description: 'Description for Project 2',
      technologies: ['Angular', 'Spring Boot'],
      done: true,
      allTasks: 150,
      doneTasks: 150
    },
    {
      id: 17,
      title: 'Project 3',
      description: 'Description for Project 3',
      technologies: ['Angular', 'Spring Boot'],
      done: true,
      allTasks: 200,
      doneTasks: 200
    },
    {
      id: 18,
      title: 'Project 4',
      description: 'Description for Project 4',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks: 180,
      doneTasks: 180
    },
    {
      id: 19,
      title: 'Project 5',
      description: 'Description for Project 5',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks: 120,
      doneTasks: 120
    },

  ];

  constructor() { 

  }
}
