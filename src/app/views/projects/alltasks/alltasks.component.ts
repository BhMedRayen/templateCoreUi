  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { TaskModule } from '../../models/task/tasks.module';
  import {Task } from '../../models/task/task.model';
  import { CommonModule } from '@angular/common';


  @Component({
    selector: 'app-alltasks',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './alltasks.component.html',
    styleUrl: './alltasks.component.scss'
  })
  export class AlltasksComponent implements OnInit{
    sprintId: number=0;
    tasks: Task[] = [];


    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.sprintId = +params['id'];
        console.log("Sprint ID:", this.sprintId); // Log sprint ID for debugging
        console.log("All Tasks:", TaskModule.tasks); // Log all tasks for debugging
        this.tasks = TaskModule.tasks.filter(task => task.sprintId === this.sprintId);
        console.log("Filtered Tasks:", this.tasks); // Log filtered tasks for debugging
      });
    }
    
    
    }


