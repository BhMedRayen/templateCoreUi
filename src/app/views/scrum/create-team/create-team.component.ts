import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { TeamServiceService } from 'src/app/services/team-service.service';
import { Team } from 'src/app/models/teams.model';

@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss'
})

export class CreateTeamComponent implements OnInit{

  users : User [] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  filteredScrumMasters: User[] = [];
  filteredTeamMembers: User[] = [];
  scrumMasterQuery: string = '';
  teamMemberQuery: string = '';
  selectedScrumMasterId: number | undefined;
  selectedTeamMemberIds: number[] = [];
  teamName: string = '';
  loading : boolean = false;
  showSuccessAlert: boolean = false;
  teams : Team [] = [];
  constructor (
    private empService : EmployeeServiceService,
    private teamService : TeamServiceService
  ) {}

  ngOnInit(): void {
    this.getConfirmedEmp();
    
  }

  getConfirmedEmp(): void {
    this.empService.getConfirmedEmp().subscribe({
      next: (response: any) => {
        this.users = response.users.map((user: any) => {
          user.photo = 'http://localhost:8000' + user.photo;
          console.log("users ! ",user);
          this.filteredScrumMasters=user;
          this.filteredTeamMembers=user;
          return user;
        });
      },
      error: (error: any) => {
        console.error('Error fetching confirmed employees:', error);
      }
    });
  }

  filterUsers(): void {
  
    if (!this.searchQuery.trim()) {
      this.filteredUsers = this.users.slice();
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  createTeam(): void {
    console.log('Team Name:', this.teamName); 
    if (!this.teamName.trim() || !this.selectedScrumMasterId || this.selectedTeamMemberIds.length === 0) {
      console.log('Validation Failed'); 
      if (!this.teamName.trim()) {
        alert('Please enter a team name.');
        return;
      }
    
      if (!this.selectedScrumMasterId) {
        alert('Please select a Scrum Master.');
        return;
      }
    
      if (this.selectedTeamMemberIds.length === 0) {
        alert('Please select at least one team member.');
        return;
      }
      return;
    }

    this.selectedTeamMemberIds.push(this.selectedScrumMasterId);
  
    const teamData = {
      team_name: this.teamName,
      scrum_master_id: this.selectedScrumMasterId,
      users: this.selectedTeamMemberIds,
    };
    this.loading=true
    console.log("data :",teamData);
    this.teamService.createTeam(teamData).subscribe({
      next: (response: any) => {
        this.loading=false;
        this.showSuccessAlert = true;
        this.teamName = '';
        this.selectedScrumMasterId = undefined;
        this.selectedTeamMemberIds = [];
        
        // Update filteredScrumMasters to include only the selected Scrum Master
        this.filteredScrumMasters = this.users.filter((user: any) => user.id === this.selectedScrumMasterId);
        
        // Filter users to get only team members (excluding Scrum Masters)
        this.filteredTeamMembers = this.users.filter((user: any) => user.is_scrum_master !== 1);
      },
      error: (error: any) => {
        console.error('Error creating team:', );
        alert("error");
        this.loading=false;
      }
    });
  }

  
  toggleTeamMemberSelection(userId: number, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
       
        if (!this.selectedTeamMemberIds.includes(userId)) {
         
            if (userId === this.selectedScrumMasterId) {
                this.selectedTeamMemberIds.unshift(userId);
            } else {
                this.selectedTeamMemberIds.push(userId);
            }
        }
    } else {
        // If checkbox is unchecked, remove the user ID from selectedTeamMemberIds
        const index = this.selectedTeamMemberIds.indexOf(userId);
        if (index !== -1) {
            this.selectedTeamMemberIds.splice(index, 1);
        }
    }
}



}
