import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormModule } from '@coreui/angular';
import { User } from 'src/app/models/user.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEmpComponent } from '../delete-emp/delete-emp.component'

@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [
    CommonModule,
    PaginationModule,// Add this line
    FormModule
  ],
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.scss'
})
export class AllEmployeesComponent implements OnInit {
  
  employees : User []  =  [];
  pagedEmployees: User[] = [];
  currentPage = 1;
  itemsPerPage = 6;
  totalEmployees: number= 0;

  constructor (
    private empService : EmployeeServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllEmployees();
    
  }

  getAllEmployees() : void {
    this.empService.getConfirmedEmp().subscribe({
      next: (response: any) => {
        this.employees = response.users.map((user: any) => {
          user.photo = 'http://localhost:8000' + user.photo;
          return user;
        
        });
        console.log(this.employees);
        
        this.totalEmployees = this.employees.length;
        this.setPage(1);
      },
      error: (error: any) => {
        console.error('Error fetching confirmed employees:', error);
      }
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.totalEmployees - 1);
    this.pagedEmployees = this.employees.slice(startIndex, endIndex + 1);
  }


  pageChanged(event: any): void {
    this.setPage(event.page);
  }

  


  openDeleteUserComponent(empId : number ) : void {
    const dialogRef = this.dialog.open(DeleteEmpComponent,{
      width: '500px',
      data : { empId }
    })
  }

  

}
