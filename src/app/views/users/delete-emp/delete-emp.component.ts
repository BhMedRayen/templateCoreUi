import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrl: './delete-emp.component.scss'
})
export class DeleteEmpComponent implements OnInit {

  loading : boolean = false ;

  constructor (
    public dialogRef: MatDialogRef<DeleteEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { empId: number },
    private empService : EmployeeServiceService
  ) {}

  ngOnInit(): void {
    console.log("employee id " , this.data.empId);
  }

  onCancelClick () {
    this.dialogRef.close()
  }

  onDeleteClick() : void {
    this.loading=true
    this.empService.deleteUser(this.data.empId).subscribe({
      next : (response : any )=> {
        this.loading=false
        this.dialogRef.close()
        location.reload();
      },
      error : (error)=> {
        this.loading=false;
        console.log("error deleting user ", error);
      },
      complete : () => {
        this.loading=false
      }
    })
  }



}
