import { NgModule } from '@angular/core';
import {ProjectsRoutingModule } from './projects-routing.module'
import { Project } from '../projects/project.module'; 
import { CommonModule } from '@angular/common'; 



@NgModule({
  imports: [
    CommonModule, 
    ProjectsRoutingModule,
    
  ],
  declarations: [
   
  ]
})
export class ProjectsModule {
  projects: Project [] = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 2',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 3',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 4',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 5',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 6',
      description: 'Description for Project 1',
      technologies: ['Angular', 'Spring Boot'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 7',
      description: 'Description for Project 2',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 8',
      description: 'Description for Project 3',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 9',
      description: 'Description for Project 4',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 10',
      description: 'Description for Project 5',
      technologies: ['React', 'Node.js'],
      done: true,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },
    {
      title: 'Project 11',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false,
      allTasks : 132,
      doneTasks : 98
    },

  ];

  constructor() { 

  }
}
