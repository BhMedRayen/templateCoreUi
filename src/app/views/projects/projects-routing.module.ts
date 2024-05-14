import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectslistComponent } from './projectslist/projectslist.component';
import { AllprojectsComponent } from './allprojects/allprojects.component' ;
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { BakclogdetailsComponent} from './bakclogdetails/bakclogdetails.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projects',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all',
      },
      {
        path : 'list',
        component : ProjectslistComponent ,
      },
      {
        path : 'allprojects',
        component : AllprojectsComponent
      },
      {
        path : 'details/:id',
        component : ProjectdetailComponent
      },
      {
        path: 'backlog-details/:id',
        component : BakclogdetailsComponent
      }


    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
