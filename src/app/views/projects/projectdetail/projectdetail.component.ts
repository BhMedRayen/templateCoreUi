  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';
  import {ProjectsService} from "../../../services/projects.service";
  import {UsersService} from "../../../services/users.service";
  import {User} from "../../../models/user.model";
  import {Project} from "../../../models/project.model";
  import { Subscription } from 'rxjs';
  import { TeamServiceService } from "../../../services/team-service.service"



  @Component({
    selector: 'app-projectdetail',
    standalone: true,
    imports: [CommonModule,RouterModule],
    templateUrl: './projectdetail.component.html',
    styleUrl: './projectdetail.component.scss'
  })
  export class ProjectdetailComponent implements OnInit{

    project: Project | undefined;
    routeSubscription: Subscription | undefined;
    teamsMap: { [projectId: number]: string } = {};
    team: any; 


    constructor(
      private route: ActivatedRoute, 
      private projectsService: ProjectsService,
      private teamService: TeamServiceService,
      private usersService: UsersService) {}

   

      ngOnInit(): void {
        this.routeSubscription = this.route.paramMap.subscribe(params => {
          const projectId = Number(params.get('id')); 
          this.fetchTeamForProject(projectId);
         
          if (projectId) {
            console.log('Calling getProjectById');
            this.getProjectById(projectId);
          }
        });
      }
      
      

    ngOnDestroy(): void {
      if (this.routeSubscription) {
        this.routeSubscription.unsubscribe();
      }
    }
  
    getProjectById(projectId: number): void {
      this.projectsService.getProjectById(projectId).subscribe(
        (response: any) => {
          this.project = response.project;
          console.log('Project Details:', this.project);
        },
        error => {
          console.error('Error fetching project:', error);
        }
      );
    }

    getTechnologyImage(technology: string): string {
      switch (technology) {
        case 'Spring boot':
          return '../../../../assets/ProjectAassets/Spring.png';
        case 'Laravel':
          return '../../../../assets/ProjectAassets/Laravel.png';
        case 'Symfony':
          return '../../../../assets/ProjectAassets/Symphony.png';
        case 'Node.js': 
          return '../../../../assets/ProjectAassets/Node.png';
        case 'Angular':
          return '../../../../assets/ProjectAassets/Angular.png';
        case 'React' : 
          return '../../../../assets/ProjectAassets/React.png';
        case 'Svelte':
          return '../../../../assets/ProjectAassets/Svelte.png';
        case 'Vue.js':
          return '../../../../assets/ProjectAassets/Vue.png';
        default:
          return 'default';
      }

    }
    fetchTeamForProject(projectId: number): void {
      this.teamService.getTeamByProjectId(projectId).subscribe({
        next: (team: any) => {
          this.teamsMap[projectId] = team;
          this.team = team; 
          this.team.team_members.forEach((teamMember: any) => {
            teamMember.photo = 'http://localhost:8000' + teamMember.photo;
            console.log(team);
            
          });
          console.log(team);
        },
        error: (error: any) => {
          console.error(`Error fetching team for project ${projectId}:`, error);
        }
      });
    }
    
  }