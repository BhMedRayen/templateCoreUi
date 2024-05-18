import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignupclientComponent} from "./signup-client/signupclient.component";
import {SignuptypeComponent} from "./signuptype/signuptype.component";
import {SignupemployeComponent} from "./signupemploye/signupemploye.component";
import {VerifyMailComponent} from "./verify-mail/verify-mail.component";
import {SendedRequestComponent} from "./sended-request/sended-request.component";
import {VerifyMailEmployeeComponent} from "./verify-mail-employee/verify-mail-employee.component"
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'sign-up-client',
    component: SignupclientComponent,
    data: {
      title: 'Signup Client'
    },
  },
  {
    path:'sign-up-type',
    component:SignuptypeComponent
  },
  {
    path:'sign-up-employe',
    component:SignupemployeComponent
  },
  {
    path :'verify-mail',
    component:VerifyMailComponent
  },
  {
    path:'sended-request',
    component:SendedRequestComponent
  },
  {
    path:'verify-mail-employee',
    component : VerifyMailEmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
