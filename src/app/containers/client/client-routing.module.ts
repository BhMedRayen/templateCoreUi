import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from "./client-layout/client-layout.component";


const routes: Routes = [ 
    {
         path: '', 
         component: ClientLayoutComponent
    },
  
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ClientRoutingModule {
}
