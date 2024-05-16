  import { CommonModule } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { ActivatedRoute, RouterModule } from '@angular/router';
  import { User } from 'src/app/models/user.model';
  import { TeamServiceService } from 'src/app/services/team-service.service';

  @Component({
    selector: 'app-eligible-users',
    standalone: true,
    imports: [
      RouterModule,
      FormsModule,
      CommonModule
    ],
    templateUrl: './eligible-users.component.html',
    styleUrl: './eligible-users.component.scss'
  })
  export class EligibleUsersComponent implements OnInit {
    
    teamId : number = 0;
    users : User [] = [];
    selectedUserIds: number[] = [];
    loading : boolean = false;
    showSuccessAlert : boolean = false ;
    searchQuery: string = '';
    originalUsers: User[] = []; 


    
    constructor (
      private route: ActivatedRoute, 
      public teamService : TeamServiceService
    ) {}
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.teamId = params['id'];
        console.log("Team id :", this.teamId);
        this.getEligibleUsers();
      });
    }

    getEligibleUsers(): void {
      this.teamService.getEligibleUsers(this.teamId).subscribe({
        next: (response: any) => {
          this.originalUsers = response.users.map((user: any) => {
            user.photo = 'http://localhost:8000' + user.photo;
            console.log("user ! ", user);
            return user; 
          });
          this.filterUsers(); 
        },
        error: (error: any) => {
          console.log("Erreur lors de la récupération des utilisateurs ", error);
        }
      });
    }
    

    toggleUserSelection(userId: number): void {
      const index = this.selectedUserIds.indexOf(userId);
      if (index === -1) {
        this.selectedUserIds.push(userId);
      } else {
        this.selectedUserIds.splice(index, 1);
      }
    }

    addToTeam(): void {
    this.loading=true;
    this.teamService.addTeamMember(this.teamId, this.selectedUserIds).subscribe({
      next: (response: any) => {
        console.log("Users added to team successfully");
        this.loading=false;
        this.selectedUserIds = [];
        this.showSuccessAlert = true;
      },
      error: (error: any) => {
        this.loading=false;
        console.log("Error adding users to team: ", error);
      }
    });
    }

    filterUsers(): void {
      if (!this.searchQuery) {
        this.users = [...this.originalUsers]; // Reset users to original data if search query is empty
        return;
      }
      const query = this.searchQuery.toLowerCase();
      this.users = this.originalUsers.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query)
      );
    }


  }
