import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomenavbarComponent} from "@docs-components/shared/homenavbar/homenavbar.component";
import {NgxSpinnerModule} from "ngx-spinner";
import {SignupnavbarComponent} from "@docs-components/shared/signupnavbar/signupnavbar.component";
import {SignupclientComponent} from "./signup-client/signupclient.component";
import {SignuptypeComponent} from "./signuptype/signuptype.component";
import {SignupemployeComponent} from "./signupemploye/signupemploye.component";


@NgModule({
  declarations: [
    LoginComponent,
    SignupclientComponent,
    SignuptypeComponent,
    SignupemployeComponent,
    RegisterComponent,
    HomenavbarComponent,
    SignupnavbarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class AuthModule {
}
