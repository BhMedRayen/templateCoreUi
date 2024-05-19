import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpInboxComponent} from "./inbox/emp-inbox.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employee Messages',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inbox',
      },
      {
        path : 'inbox',
        component : EmpInboxComponent
      },
    ],

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeMessagesRoutingModule {}
