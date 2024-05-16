import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {EmployeeMessagesRoutingModule} from "./employee-messages-routing.module";

@NgModule({
  imports: [
    CommonModule,
    EmployeeMessagesRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
  ],
  declarations: [

  ],

})
export class EmployeeMessagesModule {
  constructor() {  }

}
