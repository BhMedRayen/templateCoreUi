import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamServiceService } from 'src/app/services/team-service.service';


@Component({
  selector: 'app-delete-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-team.component.html',
  styleUrl: './delete-team.component.scss'
})
export class DeleteTeamComponent implements OnInit{

id : number = 0;
loading : boolean = false;

  constructor (
    public dialogRef: MatDialogRef<DeleteTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private teamsService : TeamServiceService
  ) {}
  ngOnInit(): void {

    this.id=this.data.id
    console.log("id : ",this.id);
    
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }


  

  

  onDeleteClick() {
    this.loading = true;
    this.teamsService.deleteTeam(this.id).subscribe(
      () => {
        this.loading=false;
        console.log("Le projet a été supprimé avec succès.");
     
      },
      (error) => {
        console.error("Erreur lors de la suppression :", error);
        alert("Erreur de suppression");
        this.dialogRef.close();
      },
      () => {
        this.dialogRef.close();
      }
    );
  }
  

}
