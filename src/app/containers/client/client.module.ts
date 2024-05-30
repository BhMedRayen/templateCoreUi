import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import {ClientLayoutComponent} from './client-layout/client-layout.component'
import { CommonModule } from '@angular/common';


@NgModule({

    declarations : [

        ClientLayoutComponent,
        
    ], 
    imports : [
        ClientRoutingModule,
        CommonModule,
    ],

})

export class ClientModule {

}