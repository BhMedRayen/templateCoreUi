import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';
import { ProjectsModule } from './views/projects/projects.module';
import {  RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';


import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  ModalModule,

} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ClientLayoutComponent} from "./containers/client/client-layout/client-layout.component";
import {EmployeeLayoutComponent} from "./containers/employee/employee-layout/employee-layout.component";
import {EmployeeHeaderComponent} from "./containers/employee/employee-layout/employee-header/employee-header.component";
import {EmployeeFooterComponent} from "./containers/employee/employee-layout/employee-footer/employee-footer.component";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {ErrorComponent} from "@docs-components/shared/error/error.component";
import {MatButtonModule} from "@angular/material/button";
import {ErrorInterceptor} from "./interceptors/error.iterceptor";
import { EmployeeMessagesModule } from './views/employee/messages/employee-messages.module';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  EmployeeFooterComponent,
  DefaultHeaderComponent,
  EmployeeHeaderComponent,
  DefaultLayoutComponent,
  ClientLayoutComponent,
  EmployeeLayoutComponent,
  ErrorComponent
];

@NgModule({
  declarations: [AppComponent,...APP_CONTAINERS],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    FormsModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    FormsModule  ,
    ProjectsModule ,
    ModalModule ,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    EmployeeMessagesModule
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
