  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { RouterLink } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { ProjectsService } from 'src/app/services/projects.service';
  import {ProductbacklogService} from 'src/app/services/productbacklog.service'
  import { MatDialog } from '@angular/material/dialog';
  import {DeleteProductBackLogComponent} from '../../productbacklog/delete-product-back-log/delete-product-back-log.component';
  import {CreateProductBackLogComponent} from '../../productbacklog/create-product-back-log/create-product-back-log.component'
  import {UpdateProductBackLogComponent} from '../../productbacklog/update-product-back-log/update-product-back-log.component'
  import { AssignTeamComponent } from '../../scrum/assign-team/assign-team.component'
import { TeamServiceService } from 'src/app/services/team-service.service';
  @Component({
    selector: 'app-bakclogdetails',
    standalone: true,
    imports: [RouterLink ,CommonModule],
    templateUrl: './bakclogdetails.component.html',
    styleUrl: './bakclogdetails.component.scss'
  })
  export class BakclogdetailsComponent implements OnInit {

      backlogId: number = 0; 
      backlog : any ;
      productBacklogs : any [] = [] ;
      teamsMap: { [projectId: number]: string } = {};
      team: any; 
  


  constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService,
        private productService : ProductbacklogService,
        public dialog: MatDialog , 
        private teamService : TeamServiceService
    ) {}


    ngOnInit(): void {

      this.route.params.subscribe(params => {
        this.backlogId=params['id'];
        console.log("backlog id :",this.backlogId);
        this.getBackLogById(this.backlogId);
        this.fetchTeamForProject(this.backlogId)
    })

  }


  getBackLogById(backlogId : number) : void {
    this.projectsService.getBackLogById(backlogId).subscribe({
      next : (response : any) => {
        this.backlog=response.backlog
        console.log("backlog :",this.backlog);
        this.getProductBackLogs(this.backlog.id);
      },
      error : (error:any)=> {
        console.log("error fetching backlog");
        
      },
      complete : () => {
        console.log("backlog fetched succefuly");
        
      }
    })
  }

  getProductBackLogs(backlogId : number) : void {
    this.productService.getBackLogById(backlogId).subscribe({
      next:(response : any) => {
        this.productBacklogs = response;
        console.log("product back log ", this.productBacklogs);
        
      }
    })
  }


  openDeleteSprintDialog(sprintId : number) : void {
    const dialogRef = this.dialog.open(DeleteProductBackLogComponent, {
      width :'500px',
      data : { sprintId :  sprintId}
    })
  }

    openAddSprintDialog(backlogId : number) : void {
    const dialogRef = this.dialog.open(CreateProductBackLogComponent, {
      width : '500px',
      data : { backlogId : backlogId }
    })
  }

  openUpdateSprintDialog(sprintId : number ) : void {
    const dialogRef = this.dialog.open(UpdateProductBackLogComponent,{
      width : '500px',
      data : {sprintId : sprintId}
    })
  }

  openAssignTeamDialog(projectId : number) : void {
    const dialogRef = this.dialog.open(AssignTeamComponent, {
      width : '500px',
      data : { projectId : projectId }
    })
  }

  fetchTeamForProject(projectId: number): void {
    this.teamService.getTeamByProjectId(projectId).subscribe({
      next: (team: any) => {
        this.teamsMap[projectId] = team;
        this.team = team; 
        this.team.team_members.forEach((teamMember: any) => {
          teamMember.photo = 'http://localhost:8000' + teamMember.photo;
        
          
        });
        console.log(team);
      },
      error: (error: any) => {
        console.error(`Error fetching team for project ${projectId}:`, error);
      }
    });
  }

  }
