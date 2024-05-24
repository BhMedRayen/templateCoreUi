import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{
  scrum_master_id : number = 0
  
  constructor (
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const sprintId = parseInt(params.get('sprintId') ?? '0', 10);
      this.scrum_master_id = parseInt(params.get('scrum_master_id') ?? '0', 10);
  });
  }

  

}
