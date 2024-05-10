  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';
  import {ProjectsService} from "../../../services/projects.service";
  import {UsersService} from "../../../services/users.service";
  import {User} from "../../../models/user.model";
  import {Project} from "../../../models/project.model";


  @Component({
    selector: 'app-projectdetail',
    standalone: true,
    imports: [CommonModule,RouterModule],
    templateUrl: './projectdetail.component.html',
    styleUrl: './projectdetail.component.scss'
  })
  export class ProjectdetailComponent implements OnInit{

    project: Project | undefined;

    visibleEmployeeIds: number[] = []; // Array to hold visible employee ids
    pageSize: number = 3; // Number of items per page
    currentPage: number = 1; // Current page number
    totalPages: number = 0; // Total number of pages
    pages: number[] = []; // Array to hold page numbers for pagination
    backlogId: number = 0;






    constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private usersService: UsersService) {}

    getUserById(id: number): User | null {
      this.usersService.getUserById(id).subscribe({
        next: (user) => {
          console.log('User:', user);
          return user;
        },
        error: (error) => {
          console.error('Error fetching user:', error);
          return null;
        }

      });

      return null;
    }


    ngOnInit(): void {

      this.route.params.subscribe(params => {
        const projectId = +params['id'];
        this.backlogId = +params['id'];
        this.projectsService.getAllProjects();
       
      });
        this.calculatePages();
      };


      calculatePages() {
     //TODO BETTER TO GET FROM BACKEND this.totalPages = Math.ceil((this.project?.employeeIds.length || 0) / this.pageSize);
      this.totalPages = 2;
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

  changePage(page: number) {
    console.log('TODO: we will do pagination later')
  }

}





