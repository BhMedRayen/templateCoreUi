import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
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
    ]
  },
  {
    name: 'Scrum',
    url: '/scrums',
    iconComponent: { name: 'cil-apps' },
    children : [
      {
        name :'My Teams',
        url  :'scrums/my-teams'
      },
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


