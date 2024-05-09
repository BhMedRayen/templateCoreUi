import { NgModule } from '@angular/core';
import {ProjectsRoutingModule } from './projects-routing.module'
import { CommonModule } from '@angular/common';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
  ],
  declarations: [

  ],

})
export class ProjectsModule {
  constructor() {  }

}
