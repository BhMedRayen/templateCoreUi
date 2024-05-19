import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamProjectComponent} from "./team-project/team-project.component"
import {EmpInboxComponent} from "./messages/inbox/emp-inbox.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employee',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employee',
      },
      {
        path : 'inbox',
        component : EmpInboxComponent
      },
      {
        path :'my-team-projects',
        component : TeamProjectComponent
      }
    ],
    
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeMessagesRoutingModule {}
