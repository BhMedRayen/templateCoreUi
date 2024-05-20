import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, FormModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {EmployeeMessagesRoutingModule} from "./employee-messages-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeeMessagesRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
    FormModule,
    FormsModule
  ],
  declarations: [

  ],

})
export class EmployeeMessagesModule {
  constructor() {  }

}
