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

  project: Project | undefined;
  loading: boolean = false;
  SpringBoot: boolean = false;
  Laravel: boolean = false;
  Symphony: boolean = false;
  NodeJs: boolean = false;
  Angular: boolean = false;
  React: boolean = false;
  VueJs: boolean = false;
  Svelte: boolean = false;
  technologies: string[] = [];
 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    public dialogRef: MatDialogRef<UpdateprojectComponent>,
    private projectsService: ProjectsService
  ) { }



  ngOnInit(): void {
    this.getProject();
    console.log("project : " + this.getProject());
    
    
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }



  getProject(): void {
    this.loading = true;
    this.projectsService.getProjectById(this.data.projectId).subscribe(
      (response : any) => {
        this.project = response.project;
        console.log(this.project);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching project:', error);
        this.loading = false;
      }
    );
  }

  
  updateProject(projectId: number): void {
  
    this.technologies = [];

    if (this.SpringBoot) {
      this.technologies.push("Spring boot");
    }
    if (this.Laravel) {
      this.technologies.push("Laravel");
    }
    if (this.Symphony) {
      this.technologies.push("Symphony");
    }
    if (this.NodeJs) {
      this.technologies.push("Node.js");
    }
    if (this.Angular) {
      this.technologies.push("Angular");
    }
    if (this.React) {
      this.technologies.push("React");
    }
    if (this.VueJs) {
      this.technologies.push("Vue.js");
    }
    if (this.Svelte) {
      this.technologies.push("Svelte");
    }
    const projectData = {
      projectname: this.project?.projectname,
      description: this.project?.description,
      technologies: this.technologies,
    };
    console.log(projectData);
    this.loading=true;
    this.projectsService.updateProject(projectId,projectData).subscribe(

      (updatedProject: Project) => {
        this.loading=false;
        console.log('Project updated successfully:', updatedProject);
        this.dialogRef.close();
        location.reload()
      },
      (error) => {
        console.error('Error updating project:', error);
        this.loading=false
     
      }
    );
  }
}
