import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectslistComponent } from './projectslist/projectslist.component';


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
        redirectTo: 'List',
      },
      {
        path : 'List',
        component : ProjectslistComponent , 
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
