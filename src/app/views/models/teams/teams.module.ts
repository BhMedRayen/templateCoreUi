import { NgModule } from '@angular/core';
import { Team } from './teams.model'; 
import { CommonModule } from '@angular/common'; 
import { Project } from '../project/project.model'; 
import { ProjectsModule } from '../../projects/projects.module'; 

@NgModule({
  imports: [
    CommonModule, 
    ProjectsModule
  ],
  declarations: [

  ],


})
export class TeamModule {
    constructor(private projectsModule: ProjectsModule) {}
    teams: Team[] = [
          {
            id: 1,
            name: 'Team Alpha',
            projects: this.getProjectsForTeam([1, 2, 3])
          },
          {
            id: 2,
            name: 'Team Spenks',
            projects: this.getProjectsForTeam([4, 5])
          },
          {
            id: 3,
            name: 'Team Ret3i',
            projects: this.getProjectsForTeam([6])
          },
          {
            id: 4,
            name: 'Team Gladiator',
            projects: this.getProjectsForTeam([7,8,9])
          },
          {
            id: 5,
            name: 'Team Warrior',
            projects: this.getProjectsForTeam([10,11,12])
          },
        
      ];
      
      assignProjectsToTeams(): void {
        this.teams.forEach(team => {
            team.projects = this.getProjectsForTeam(team.projects.map(project => project.id));
        });
    }

    getProjectsForTeam(projectIds: number[]): Project[] {
        const projects: Project[] = [];
        projectIds.forEach(projectId => {
          const project = this.projectsModule.projects.find(p => p.id === projectId);
          if (project) {
            projects.push(project);
          }
        });
        return projects;
    }
}