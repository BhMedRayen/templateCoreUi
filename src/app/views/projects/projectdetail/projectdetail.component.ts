import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project/project.model';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.scss'
})
export class ProjectdetailComponent implements OnInit{

  project: Project | undefined;
  constructor(private route: ActivatedRoute, private projectsModule: ProjectsModule) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = +params['id']; 
      this.project = this.projectsModule.projects.find(p => p.id === projectId);
    });
    };
  }


 


