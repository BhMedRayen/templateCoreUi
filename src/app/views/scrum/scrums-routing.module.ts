import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTeamsComponent } from '../scrum/all-teams/all-teams.component'

const routes: Routes = [
    {
       path : '' ,
       data : {
         title :  'Scrums'
       },
       children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'all',
        },
        {
            path : 'all-teams',
            component : AllTeamsComponent
        },
      ]

    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class ScrumsRoutingModule {}
