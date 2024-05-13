import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {ScrumsRoutingModule} from "./scrums-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrumsRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
  ]
})
export class ScrmModule { }
