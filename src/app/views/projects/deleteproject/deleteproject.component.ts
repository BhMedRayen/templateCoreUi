import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {ProjectsService} from "../../../services/projects.service";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-deleteproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deleteproject.component.html',
  styleUrl: './deleteproject.component.scss'
})
export class DeleteprojectComponent implements OnInit {
  projectId: number = 0;
  loading: boolean = false;


  onCancelClick(): void {
    this.dialogRef.close();

  }
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    private projectsService: ProjectsService,
    public dialogRef: MatDialogRef<DeleteprojectComponent>,
    private router: Router

  ) {}


  ngOnInit(): void {
    this.projectId = this.data.projectId;
    console.log("project id : " + this.projectId);

  }

  onDeleteClick(): void {
    this.loading = true;
    this.projectsService.deleteProject(this.projectId).subscribe(() => {
      console.log("Le projet a été supprimé avec succès");

      // refresh projects
      this.projectsService.fetchUnDoneProject();


    }, error => {
      alert('Une erreur s\'est produite lors de la suppression du projet. Veuillez réessayer plus tard.');
    },
    () => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
