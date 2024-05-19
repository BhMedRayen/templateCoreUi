import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamProjectComponent} from "./team-project/team-project.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employee Projects',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-team-projects',
      },
      {
        path : 'my-team-projects',
        component : TeamProjectComponent
      },
    ],

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeProjectsRoutingModule {}
