import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import {EmployeeLayoutComponent} from "./containers/employee";
import {ClientLayoutComponent} from "./containers/client";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeLayoutComponent,
    data: {
      title: 'Employee Home'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'messages',
        loadChildren: () =>
          import('./views/employee/messages/employee-messages.module').then((m) => m.EmployeeMessagesModule)
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./views/employee/projects/employee-projects.module').then((m) => m.EmployeeProjectsModule)
      },
      {
        path :'scrums',
        loadChildren : ()=>
          import ('./views/employee/Scrum/my-teams.module').then((m)=>m.MyTeamsModule)
      }
    ]
  },
  {
    path: 'client',
    component: ClientLayoutComponent,
    data: {
      title: 'Client Home'
    },
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('./views/client/projects/client-projects.module').then((m) => m.ClientProjectsModule)
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },

      {
        path: 'projects',
        loadChildren: () =>
          import('./views/projects/projects.module').then((m) => m.ProjectsModule)
      },
      {
        path :'scrums',
        loadChildren : () =>
        import('./views/scrum/scrum.module').then((m)=> m.ScrmModule)
      },
      {
        path : 'users',
        loadChildren : () =>
        import ('./views/users/users.module').then((m)=> m.UsersModule)
      },
      {
        path: 'messages',
        loadChildren: () =>
         import('./views/messages/product-owner-messages.module').then((m)=>m.ProductOwnerMessageModule)
      },

    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/guest/guest.module').then((m) => m.GuestModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'auth/login',
  },
  {
    path: 'sign-up-client',
    redirectTo: 'auth/sign-up-client',
  },
  {
    path: 'sign-up-type',
    redirectTo: 'auth/sign-up-type',
  },
  {
    path: 'sign-up-employe',
    redirectTo: 'auth/sign-up-employe',
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
