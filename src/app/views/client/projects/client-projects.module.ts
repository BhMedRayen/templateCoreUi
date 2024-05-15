import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {ClientProjectsRoutingModule} from "./client-projects-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ClientProjectsRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
  ],
  declarations: [

  ],

})
export class ClientProjectsModule {
  constructor() {  }

}
