import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HomepageComponent} from "./homepage/homepage.component";
import {GuestRoutingModule} from "./guest-routing.module";


@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [
    HomepageComponent,
  ]
})
export class GuestModule {
}
