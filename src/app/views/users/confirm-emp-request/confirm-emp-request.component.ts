import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-confirm-emp-request',
  templateUrl: './confirm-emp-request.component.html',
  styleUrl: './confirm-emp-request.component.scss'
})
export class ConfirmEmpRequestComponent implements OnInit {


  loading : boolean = false ;
  constructor (
    public dialogRef: MatDialogRef<ConfirmEmpRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { empId: number },
    private empService : EmployeeServiceService
  ) {}

  ngOnInit(): void {

  }

  onCancelClick () {
    this.dialogRef.close()
  }

  onConfirm () : void {
    this.loading = true
    this.empService.confirmEmpRequest(this.data.empId).subscribe({
      next:(response : any )=> {
          this.loading=false
          this.dialogRef.close()
          location.reload();
      },
      error:(error : any) => {
        this.loading=false
        console.log("error confirm request " , error);

      }
    })
  }


}
