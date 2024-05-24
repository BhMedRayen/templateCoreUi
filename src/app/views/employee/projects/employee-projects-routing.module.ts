import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamProjectComponent} from "./team-project/team-project.component";
import {ProductBacklogComponent} from "./product-backlog/product-backlog.component"
import {TasksComponent} from "./tasks/tasks.component"
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
      {
        path : 'tasks/:sprintId',
        component : TasksComponent
      }
    ],

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeProjectsRoutingModule {}
