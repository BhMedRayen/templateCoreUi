import { Component, OnInit } from '@angular/core';
import { Backlog } from '../../models/backlog/backlog.model';
import { BacklogModule } from '../../models/backlog/backlog.module'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bakclogdetails',
  standalone: true,
  imports: [BacklogModule],
  templateUrl: './bakclogdetails.component.html',
  styleUrl: './bakclogdetails.component.scss'
})
export class BakclogdetailsComponent implements OnInit {

backlogId: number = 0; 
backlog: Backlog = {} as Backlog;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.backlogId = +params['id']; 
      const foundBacklog = BacklogModule.backlogs.find(backlog => backlog.id === this.backlogId);
      if (foundBacklog) {
        this.backlog = foundBacklog;
      } else {
        console.error(`Backlog with ID ${this.backlogId} not found`);
      }
    });
  }
  
}
