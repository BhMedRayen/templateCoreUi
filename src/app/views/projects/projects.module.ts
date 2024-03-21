import { NgModule } from '@angular/core';
import {ProjectsRoutingModule } from './projects-routing.module'
import { Project } from '../projects/project.module'; // Import Project interface here

@NgModule({
  imports: [
    ProjectsRoutingModule
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
      done: false
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      technologies: ['React', 'Node.js'],
      done: true
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      technologies: ['React', 'Node.js'],
      done: true
    },
    {
      title: 'Project 4',
      description: 'Description for Project 4',
      technologies: ['React', 'Node.js'],
      done: false
    },
    {
      title: 'Project 5',
      description: 'Description for Project 5',
      technologies: ['React', 'Node.js'],
      done: true
    },
    {
      title: 'Project 6',
      description: 'Description for Project 6',
      technologies: ['React', 'Node.js'],
      done: false
    },

  ];

  constructor() { }
}
