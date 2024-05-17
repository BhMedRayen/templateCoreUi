import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEmpComponent } from '../delete-emp/delete-emp.component'
import { ConfirmEmpRequestComponent } from '../confirm-emp-request/confirm-emp-request.component'
@Component({
  selector: 'app-unconfirmed-employees',
  templateUrl: './unconfirmed-employees.component.html',
  styleUrl: './unconfirmed-employees.component.scss'
})
export class UnconfirmedEmployeesComponent implements OnInit {

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
    this.empService.getUnConfirmedEmp().subscribe({
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

openConfirmUserRequestComponent(empId : number ) : void {
  const dialogRef = this.dialog.open(ConfirmEmpRequestComponent, {
    width : '500px',
    data : { empId }
  })
}


}
