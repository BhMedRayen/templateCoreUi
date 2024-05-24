import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sprint-back-log',
  standalone: true,
  imports: [],
  templateUrl: './create-sprint-back-log.component.html',
  styleUrl: './create-sprint-back-log.component.scss'
})
export class CreateSprintBackLogComponent  implements OnInit{
  
  
  constructor (
    public dialogRef: MatDialogRef<CreateSprintBackLogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sprintname : string , backlog_id : number },
  ) {}
  
  
  ngOnInit(): void {
    console.log("sprint name " , this.data.sprintname , "project_id " , this.data.backlog_id);
    
  
  }

}
