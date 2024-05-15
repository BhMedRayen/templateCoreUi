import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllprojectsComponent } from './allprojects/allprojects.component' ;

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projects',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'allprojects',
      },
      {
        path : 'allprojects',
        component : AllprojectsComponent
      },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientProjectsRoutingModule {}
