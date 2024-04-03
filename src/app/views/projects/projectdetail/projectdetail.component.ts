  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { Project } from '../../models/project/project.model';
  import { ProjectsModule } from '../projects.module';
  import { CommonModule } from '@angular/common';
  import { User } from '../../models/Users/User.model';
  import { UserModule } from '../../models/Users/User.module';
  import { RouterModule } from '@angular/router';


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






    constructor(private route: ActivatedRoute, private projectsModule: ProjectsModule) {}

    getUserById(id: number): User | undefined {
      return UserModule.users.find((user: User) => user.id === id); 
    }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const projectId = +params['id']; 
        this.backlogId = +params['id'];
        this.project = this.projectsModule.projects.find(p => p.id === projectId);
      });
        this.calculatePages();
        this.updateVisibleEmployees();
      };


      calculatePages() {
      this.totalPages = Math.ceil((this.project?.employeeIds.length || 0) / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    updateVisibleEmployees() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.visibleEmployeeIds = this.project?.employeeIds.slice(startIndex, endIndex) || [];
  }
  changePage(page: number) {
    this.currentPage = page;
    this.updateVisibleEmployees();
  }



    }


  


