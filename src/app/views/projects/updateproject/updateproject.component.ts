import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProjectsService } from '../../../services/projects.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-updateproject',
  standalone: true,
  imports: [
    CommonModule ,
    FormsModule ,
    MatDialogModule
  
  ],
  templateUrl:'./updateproject.component.html',
  styleUrls: ['./updateproject.component.scss']
})
export class UpdateprojectComponent implements OnInit {

  project: Project | undefined ; 
  loading: boolean = false;

  springBootSelected: boolean = false;
  laravelSelected: boolean = false;
  symphonySelected: boolean = false;
  nodejsSelected: boolean = false;
  angularSelected: boolean = false;
  reactSelected: boolean = false;
  vuejsSelected: boolean = false;
  svelteSelected: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    public dialogRef: MatDialogRef<UpdateprojectComponent>,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  getProject(): void {
    this.loading = true;
    this.projectsService.getProjectById(this.data.projectId).subscribe(
      (project: Project) => {
        this.project = project;
        console.log(this.project);
        

        if (this.project) {
          this.springBootSelected = this.project.technologies.includes('Spring boot');
          this.laravelSelected = this.project.technologies.includes('Laravel');
          this.symphonySelected = this.project.technologies.includes('Symphony');
          this.nodejsSelected = this.project.technologies.includes('Node.js');
          this.angularSelected = this.project.technologies.includes('Angular');
          this.reactSelected = this.project.technologies.includes('React');
          this.vuejsSelected = this.project.technologies.includes('Vue.js');
          this.svelteSelected = this.project.technologies.includes('Svelte');
        }

        this.loading = false;
      },
      (error) => {
        console.error('Error fetching project:', error);
        this.loading = false;
      }
    );
  }
}
