import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ModalModule, } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ProfileRoutingModule} from "./profile-routing.module";
import {SettingsComponent} from "./settings/settings.component";

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    ModalModule ,
    RouterModule,
  ],
  declarations: [
    OverviewComponent,
    SettingsComponent
  ],

})
export class ProfileModule {
  constructor() {  }

}
