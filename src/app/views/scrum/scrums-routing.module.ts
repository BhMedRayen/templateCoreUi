import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTeamsComponent } from '../scrum/all-teams/all-teams.component'
import { CreateTeamComponent } from './create-team/create-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component'
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
        }, 
        
        {
          path :'update/:id',
          component : UpdateTeamComponent
        }
      ]

    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class ScrumsRoutingModule {}
