import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ProductbacklogService } from 'src/app/services/productbacklog.service';
@Component({
  selector: 'app-update-product-back-log',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-product-back-log.component.html',
  styleUrl: './update-product-back-log.component.scss'
})
export class UpdateProductBackLogComponent implements OnInit{
 
  num_sprint : number = 0;
  sprint_name : String = '';
  user_story : String = '';
  priority : String ='';
  sprintId : number = 0 ; 
  loading : boolean = false ; 
  sprint: any = { num_sprint: 0, sprint_name: '', user_story: '', priority: '' };
  ngOnInit(): void {
   this.sprintId=this.data.sprintId;
   console.log("sprintId :",this.sprintId);
   this.getSprintById();
   
  }

  constructor(
    private productService : ProductbacklogService,
    @Inject(MAT_DIALOG_DATA) public data: { sprintId: number },
    public dialogRef: MatDialogRef<UpdateProductBackLogComponent>,

  ) {}

  onUpdateSprint() {
    const sprintData = {
      num_sprint: this.sprint.num_sprint,
      sprint_name: this.sprint.sprint_name,
      user_story: this.sprint.user_story,
      priority: this.sprint.priority
    };

    this.loading = true;
    this.productService.updateSprint(sprintData, this.sprintId).subscribe({
      next: (response: any) => {
        console.log("Sprint updated successfully:", response);
      
      },
      error: (error: any) => {
        console.error("Error updating sprint:", error);
      
      },
      complete: () => {
        this.loading = false;
        this.dialogRef.close();
        console.log("Update sprint operation completed.");
        location.reload()
      }
    });
  }


  onCancelClick(): void {
    this.dialogRef.close();
    
  }

  getSprintById(): void {
    this.productService.getSprintById(this.data.sprintId).subscribe({
      next: (response: any) => {
        this.sprint = response;
      },
      error: (error: any) => {
        console.error("Error fetching sprint:", error);
      }
    });
  }

}  
