import { Component, OnInit } from '@angular/core';
import { Backlog } from '../../models/backlog/backlog.model';
import { BacklogModule } from '../../models/backlog/backlog.module'
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskModule } from '../../models/task/tasks.module';
import { SprintModule } from '../../models/sprint/sprint.module'
 
@Component({
  selector: 'app-bakclogdetails',
  standalone: true,
  imports: [BacklogModule , RouterLink ,CommonModule],
  templateUrl: './bakclogdetails.component.html',
  styleUrl: './bakclogdetails.component.scss'
})
export class BakclogdetailsComponent implements OnInit {

backlogId: number = 0; 
backlog: Backlog = {} as Backlog;
  constructor(private route: ActivatedRoute) { }


  getDoneTasksCount(sprint: any): number {
    return sprint.tasksId.filter((taskId: number) => {
      const task = TaskModule.tasks.find((task: any) => task.id === taskId);
      return task && task.status;
    }).length;
  }
  
  getSprintById(sprintId: number): any {
    return SprintModule.sprints.find(sprint => sprint.id === sprintId);
  }
  

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
