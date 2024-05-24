import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductbacklogService } from 'src/app/services/productbacklog.service';
import {SprintServiceService} from 'src/app/services/sprint-service.service'
import {CreateSprintBackLogComponent} from '../create-sprint-back-log/create-sprint-back-log.component'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-product-backlog',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-backlog.component.html',
  styleUrl: './product-backlog.component.scss'
})
export class ProductBacklogComponent implements OnInit {
  
  scrum_master_id: number =0;
  projectId: number = 0;
  productBacklogs : any
  empId: number = 0; 
  sprints : any [] = []


  constructor(
    private route: ActivatedRoute,
    private sprintService : SprintServiceService,
    private productService : ProductbacklogService,
    public dialog: MatDialog
    ) {}

  
  
  ngOnInit(): void {

    const userData = localStorage.getItem('employee');
    if (userData) {
      const user = JSON.parse(userData);
      this.empId = user.id;
      console.log("User auth ID: ", this.empId);
    } else {
      console.error('User data not found in local storage.');
    }

    this.route.paramMap.subscribe(params => {
      const teamIdParam = params.get('teamId');
      const projectIdParam = params.get('projectId');
      this.scrum_master_id = parseInt(teamIdParam ?? '0', 10);
      this.projectId = parseInt(projectIdParam ?? '0', 10);
      console.log("scrum master  id : " , this.scrum_master_id , "project id " , this.projectId);
    });
    this.getProductBackLogs(this.projectId);
    console.log("product backlog ",this.productBacklogs);
    this.getSprintByProjectId();
    
  }


  getProductBackLogs(backlogId : number) : void {
    this.productService.getBackLogById(backlogId).subscribe({
      next:(response : any) => {
        this.productBacklogs = response;
        console.log("product back log ", this.productBacklogs);
      }
    })
  }

  getSprintByProjectId() : void {
    this.sprintService.getSprintsByProjectId(this.projectId).subscribe({
      next : (response : any ) => {
        this.sprints=response.sprints
        console.log("sprints",this.sprints);
      }
    })
  }

  openCreateSprintBacklog(sprintname : string) : void {
      const  dialogRef = this.dialog.open(CreateSprintBackLogComponent,{
        width : '500px',
        data : {sprintname : sprintname , backlog_id : this.projectId}
      })
  }




}
