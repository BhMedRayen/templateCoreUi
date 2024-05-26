import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminInboxComponent} from "./inbox/admin-inbox.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Product Owner  Messages',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inbox',
      },
      {
        path : 'inbox',
        component : AdminInboxComponent
      },
    ],

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductOwnerMessagesRoutingModule {}
