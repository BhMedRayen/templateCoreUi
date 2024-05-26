import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from '../users/users-routing.module'
import {FormModule} from "@coreui/angular";
import {UnconfirmedEmployeesComponent} from "./unconfirmed-employees/unconfirmed-employees.component";
import {DeleteEmpComponent} from "./delete-emp/delete-emp.component";
import {ConfirmEmpRequestComponent} from "./confirm-emp-request/confirm-emp-request.component";
import {ClientsComponent} from "./clients/clients.component";
import {AllEmployeesComponent} from "./all-employees/all-employees.component";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UnconfirmedEmployeesComponent,
    DeleteEmpComponent,
    ConfirmEmpRequestComponent,
    ClientsComponent,
    AllEmployeesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PaginationModule,
    FormModule,
    FormsModule,
    CommonModule
  ]
})
export class UsersModule { }
