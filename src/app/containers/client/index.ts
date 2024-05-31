import { Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout';
import {ClientContractsComponent} from './client-contracts/client-contracts.component'

export * from './client-layout';

const routes: Routes = [ 
    {
         path: 'client', 
         component: ClientLayoutComponent
    },

    
]
