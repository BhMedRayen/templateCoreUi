import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEmployeesComponent } from '../users/all-employees/all-employees.component'
import {UnconfirmedEmployeesComponent} from '../users/unconfirmed-employees/unconfirmed-employees.component'
import {ClientsComponent} from '../users/clients/clients.component'
import {ContractComponent} from '../users/contract/contract.component'
const routes: Routes = [
    {
       path : '' ,
       data : {
         title :  'Users'
       },
       children: [
        {
            path : 'all-employees',
            component : AllEmployeesComponent
            
        },
        {
            path : 'unconfirmed',
            component : UnconfirmedEmployeesComponent
        },
        {
            path : 'clients',
            component : ClientsComponent
        },
         {
           path :'contract/:id',
           component : ContractComponent
         }
      ]

    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class UsersRoutingModule {}
