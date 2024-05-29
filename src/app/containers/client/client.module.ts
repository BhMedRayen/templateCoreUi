import { NgModule } from '@angular/core';
import {ClientnavbarComponent} from "../../../components/shared/client-nav-bar/clientnavbar.component"
import { ClientRoutingModule } from './client-routing.module';
import {ClientLayoutComponent} from './client-layout/client-layout.component'
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 


@NgModule({

    declarations : [
        ClientnavbarComponent,
        ClientLayoutComponent,
        
    ], 
    imports : [
        ClientRoutingModule,
        CommonModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})

export class ClientModule {

}