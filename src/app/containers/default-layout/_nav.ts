import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Projects',
    url: '/projects',
    iconComponent: { name: 'cil-apps' },
    children : [
      {
        name: 'List',
        url : 'projects/list'
      },
      {
        name :'all projects',
        url  :'projects/allprojects' 
      }

    ]
  },
];
