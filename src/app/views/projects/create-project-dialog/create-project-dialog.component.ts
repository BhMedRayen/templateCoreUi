import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectsService } from '../../../services/projects.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project-dialog',
  standalone: true,
  imports: [
    FormsModule ,
    CommonModule
  ],
  templateUrl: './create-project-dialog.component.html',
  styleUrl: './create-project-dialog.component.scss'
})

export class CreateProjectDialogComponent {

  projectname: string = '';
  description: string = '';
  SpringBoot: boolean = false;
  Laravel: boolean = false;
  Symphony: boolean = false;
  NodeJs: boolean = false;
  Angular: boolean = false;
  React: boolean = false;
  VueJs: boolean = false;
  Svelte: boolean = false;
  technologies: string[] = [];
  product_owner_id = "1";
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    private projectsService: ProjectsService,
    private router: Router

  ) { }
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCreateClick(): void {

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
      projectname: this.projectname,
      description: this.description,
      technologies: this.technologies,
      product_owner_id : this.product_owner_id
    };
    console.log(projectData);

    this.loading = true;
    this.projectsService.createProject(projectData).subscribe({
      next: (response: any) => {
        console.log('Project created:', response);
        this.projectsService.fetchUnDoneProject()
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error creating project:', error);
      },
      complete: () => {
        this.loading = false;
       // this.router.navigate(['/projects/list']);

      }
    });
  }

}
