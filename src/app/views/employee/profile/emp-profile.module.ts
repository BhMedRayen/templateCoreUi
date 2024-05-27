import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {SettingsComponent} from "./settings/settings.component";
import {EmpProfileRoutingModule} from "./emp-profile-routing.module";

@NgModule({
  imports: [
    CommonModule,
    EmpProfileRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
  ],
  declarations: [
    OverviewComponent,
    SettingsComponent
  ],

})
export class EmpProfileModule {
  constructor() {  }

}
