import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTeamsComponent } from '../scrum/all-teams/all-teams.component'
import { CreateTeamComponent } from './create-team/create-team.component';

const routes: Routes = [
    {
       path : '' ,
       data : {
         title :  'Scrums'
       },
       children: [
        {
            path : 'all-teams',
            component : AllTeamsComponent
            
        },
        
        {
            path :'create-team',
            component : CreateTeamComponent
        } 
      ]

    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class ScrumsRoutingModule {}
