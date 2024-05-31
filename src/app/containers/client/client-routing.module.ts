  import { NgModule } from "@angular/core";
  import { RouterModule, Routes } from '@angular/router';
  import {ClientContractsComponent} from './client-contracts/client-contracts.component'

  const routes: Routes = [ 
    {
      path : '' ,
      data : {
        title :  'Clients'
      },
      children: [
      {
          path : 'contracts/:id',
          component : ClientContractsComponent
      },
      ]

      }
      
  ]

  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
  export class ClientRoutingModule {
  }
