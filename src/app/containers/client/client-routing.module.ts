import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from "./client-layout/client-layout.component";
import {ClientContractsComponent} from './client-contracts/client-contracts.component'

const routes: Routes = [ 
  {
    path : '' ,
    data : {
      title :  'Clients'
    },
    children: [
     {
         path : 'contracts',
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
