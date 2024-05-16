import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Projects',
    url: '/projects',
    iconComponent: { name: 'cil-apps' },
    children : [
      {
        name: 'manage projects',
        url : 'projects/list'
      },
      {
        name :'all projects',
        url  :'projects/allprojects' 
      }

    ]
  },
  {
    name : 'Scrums',
    url : '/scrums',
    iconComponent : {name : 'cil-apps'},

    children : [
      {
        name : 'all teams',
        url : 'scrums/all-teams'
      }
    ]
  },
  {
    name :'Users',
    url :'/users',
    iconComponent : {name :'cil-apps'},
    children : [
      {
        name :'all employees',
        url : 'users/all-employees',
      },
      {
        name :'unconfirmed employees',
        url : 'users/unconfirmed'
      },
      {
        name :'clients',
        url :'users/clients'
      }
    ]
  }
  
];
