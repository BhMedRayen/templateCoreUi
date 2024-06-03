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
    ]
  },
  {
    name: 'Messages',
    url: '/messages',
    iconComponent: { name: 'cil-send' },
    children : [
      {
        name :'Inbox',
        url  :'messages/inbox'
      },
    ]
  },






];


