import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, FormModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {ProductOwnerMessagesRoutingModule} from "./product-owner-messages-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductOwnerMessagesRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
    FormModule,
    FormsModule
  ],
  declarations: [

  ],

})
export class ProductOwnerMessageModule {
  constructor() {  }

}
