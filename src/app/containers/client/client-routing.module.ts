  import { NgModule } from "@angular/core";
  import { RouterModule, Routes } from '@angular/router';
  import {ClientContractsComponent} from './client-contracts/client-contracts.component'
  import {ChatComponent} from './chat/chat.component'

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
      {
        path : 'chat/:id',
        component : ChatComponent
      }
      ]

      }
      
  ]

  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
  export class ClientRoutingModule {
  }
