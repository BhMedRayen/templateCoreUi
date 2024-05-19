import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, FormModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {TeamProjectComponent} from "./team-project/team-project.component";
import {EmployeeProjectsRoutingModule} from "./employee-projects-routing.module";

@NgModule({
  imports: [
    CommonModule,
    EmployeeProjectsRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
    FormModule
  ],
  declarations: [
    TeamProjectComponent
  ],

})
export class EmployeeProjectsModule {
  constructor() {  }

}
