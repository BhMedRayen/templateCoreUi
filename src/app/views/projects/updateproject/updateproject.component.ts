import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectsService } from '../../../services/projects.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-updateproject',
  standalone: true,
  templateUrl:'./updateproject.component.html',
  styleUrls: ['./updateproject.component.scss']
})
export class UpdateprojectComponent implements OnInit {

  project: Project | undefined ; 
  loading: boolean = false;

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
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching project:', error);
        this.loading = false;
      }
    );
  }
}
