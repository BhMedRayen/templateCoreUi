import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from 'src/app/services/projects.service';

 
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



constructor(
      private route: ActivatedRoute,
      private projectsService: ProjectsService,
   ) {}



  



 
  

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.backlogId=params['id'];
      console.log("backlog id :",this.backlogId);
      this.getBackLogById(this.backlogId);
  })

}


getBackLogById(backlogId : number) : void {
  this.projectsService.getBackLogById(backlogId).subscribe({
    next : (response : any) => {
      this.backlog=response.backlog
      console.log("backlog :",this.backlog);
      
    },
    error : (error:any)=> {
      console.log("error fetching backlog");
      
    },
    complete : () => {
      console.log("backlog fetched succefuly");
      
    }
  })
}

}
