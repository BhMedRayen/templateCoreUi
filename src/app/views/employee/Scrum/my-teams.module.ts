import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, FormModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {MyTeamsRoutingModule} from "./my-teams-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyTeamsRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
    FormModule,
    FormsModule
  ],
  declarations: [

  ],

})

export class MyTeamsModule {
    constructor () {}
}
