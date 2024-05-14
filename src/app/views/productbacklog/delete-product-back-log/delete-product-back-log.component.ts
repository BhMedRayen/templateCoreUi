import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductbacklogService } from 'src/app/services/productbacklog.service';

@Component({
  selector: 'app-delete-product-back-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-product-back-log.component.html',
  styleUrl: './delete-product-back-log.component.scss'
})
export class DeleteProductBackLogComponent implements OnInit{

  loading: boolean = false;
  sprintId = 0;
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { sprintId: number },
    public dialogRef: MatDialogRef<DeleteProductBackLogComponent>,
    private router: Router ,
    private productService : ProductbacklogService
  ) {}


  ngOnInit(): void {
   this.sprintId=this.data.sprintId;
  }



  onDeleteClick() : void {
    this.loading = true;
    this.productService.deleteProductBacklog(this.sprintId).subscribe(()=> {
      alert("Sprint deletet succefuly")
      console.log("la sprint a été supprimé avec succes");
    },
   error => {
    alert('Une erreur s\'est produite lors de la suppression du product sprint. Veuillez réessayer plus tard.');
   } , 
   ()=> {
     this.loading = false;
     this.dialogRef.close();
   })
  }

  onCancelClick(): void {
    this.dialogRef.close();
    
  }
}
