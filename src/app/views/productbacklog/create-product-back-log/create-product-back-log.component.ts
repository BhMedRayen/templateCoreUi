import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ProductbacklogService } from 'src/app/services/productbacklog.service';

@Component({
  selector: 'app-create-product-back-log',
  standalone: true,
  imports: [
    FormsModule ,
    CommonModule
  ],
  templateUrl: './create-product-back-log.component.html',
  styleUrl: './create-product-back-log.component.scss'
})
export class CreateProductBackLogComponent implements OnInit{

  num_sprint : number = 0;
  sprint_name : String = '';
  user_story : String = '';
  priority : String ='';

 loading : boolean = false;

 constructor (

  private productService : ProductbacklogService,
  @Inject(MAT_DIALOG_DATA) public data: { backlogId: number },
  public dialogRef: MatDialogRef<CreateProductBackLogComponent>,

 ){}
 
 
  ngOnInit(): void {
   console.log("id :" , this.data);
  }

  onCreateSprint(): void {
    const sprintData = {
      num_sprint: this.num_sprint,
      sprint_name: this.sprint_name,
      user_story: this.user_story,
      priority: this.priority
    };

    this.loading = true;
    this.productService.createSprint(sprintData, this.data.backlogId).subscribe({
      next: (response: any) => {
        console.log("Sprint created successfully:", response);
        this.loading = false;
        this.dialogRef.close();
        location.reload()
      },
      error: (error: any) => {
        console.log("Error creating sprint:", error);
      
        this.loading = false;
      }
    });
  }


  onCancelClick(): void {
    this.dialogRef.close();
    
  }

}
