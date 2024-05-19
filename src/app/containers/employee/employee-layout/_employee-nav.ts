import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
<<<<<<< HEAD
    name : 'My Team Projects',
    url : 'project',
    iconComponent : {name : 'cil-apps'},
    children : [
      {
        name : 'project',
        url : 'project/my-team-project'
      }     
=======
    name : 'Projects',
    url : '/projects',
    iconComponent : {name : 'cil-apps'},
    children : [
      {
        name : 'My Team Projects',
        url : 'projects/my-team-projects'
      },
      {
        name : 'Active Projects',
        url : 'projects/active-projects'
      },
      {
        name : 'Done Projects',
        url : 'projects/done-projects'
      }
>>>>>>> 17027de6e4273432272331e538c525a164f4c50c
    ]
  },


  {
    name: 'Messages',
    url: '/messages',
    iconComponent: { name: 'cil-apps' },
    children : [
      {
        name :'Inbox',
        url  :'messages/inbox'
      },
    ]
  },





];
