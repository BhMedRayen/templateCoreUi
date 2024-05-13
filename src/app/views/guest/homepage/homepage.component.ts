import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { User } from 'src/app/models/user.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { ProjectsService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit{

  users : User [] = []
  projects : Project [] = []



  constructor (
    private empService : EmployeeServiceService ,
    private projectsService : ProjectsService
  ) {}

  ngOnInit(): void {
    this.getConfirmedEmp()
    this.getDoneProjects()
  }


  getConfirmedEmp(): void {
    this.empService.getConfirmedEmp().subscribe({
      next: (response: any) => {
        this.users = response.users.map((user: any) => {
          user.photo = 'http://localhost:8000' + user.photo;
          return user;
        });
      },
      error: (error: any) => {
        console.error('Error fetching confirmed employees:', error);
      }
    });
  }

  getDoneProjects() : void {
    this.projectsService.getDoneProjects().subscribe({
      next: (response: any) => {
        
        this.projects = response.projects;
        
        console.log("projects : ",this.projects);
        
      },
      error:(error:any) => {
        console.log("error fetching projects")
      }
    })
  }


  getTechnologyImage(technology: string): string {
    switch (technology) {
      case 'Spring boot':
        return '../../../../assets/ProjectAassets/Spring.png';
      case 'Laravel':
        return '../../../../assets/ProjectAassets/Laravel.png';
      case 'Symfony':
        return '../../../../assets/ProjectAassets/Symphony.png';
      case 'Node.js': 
        return '../../../../assets/ProjectAassets/Node.png';
      case 'Angular':
        return '../../../../assets/ProjectAassets/Angular.png';
      case 'React' : 
        return '../../../../assets/ProjectAassets/React.png';
      case 'Svelte':
        return '../../../../assets/ProjectAassets/Svelte.png';
      case 'Vue.js':
        return '../../../../assets/ProjectAassets/Vue.png';
      default:
        return 'default';
    }

  }
  



}
