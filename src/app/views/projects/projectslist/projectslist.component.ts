import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../projects.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectslist',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.scss']
})
export class ProjectslistComponent implements OnInit {

  totalProjects: number =0;
  doneProjects: number =0;
  undoneProjects: any[] = [];
  showAllUndoneProjects: boolean = false;
  constructor(private projectsModule: ProjectsModule) {}
  toggleAllUndoneProjects() {
    this.showAllUndoneProjects = !this.showAllUndoneProjects;
    if (this.showAllUndoneProjects) {
        this.undoneProjects = this.projectsModule.projects.filter(project => !project.done).slice(0, 6);
    } else {
        this.undoneProjects = this.projectsModule.projects.filter(project => !project.done);
    }
}
ngOnInit(): void {
    this.totalProjects = this.projectsModule.projects.length;
    this.doneProjects = this.projectsModule.projects.filter(project => project.done).length;
    this.undoneProjects = this.projectsModule.projects.filter(project => !project.done)
}

}
