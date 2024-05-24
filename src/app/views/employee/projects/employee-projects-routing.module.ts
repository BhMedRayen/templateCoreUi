import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamProjectComponent} from "./team-project/team-project.component";
import {ProductBacklogComponent} from "./product-backlog/product-backlog.component"
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
        redirectTo: 'projects',
      },
      {
        path : 'my-team-projects',
        component : TeamProjectComponent
      },
      {
        path: 'product-backlog/:teamId/:projectId',
        component: ProductBacklogComponent,
      },
    ],

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeProjectsRoutingModule {}
