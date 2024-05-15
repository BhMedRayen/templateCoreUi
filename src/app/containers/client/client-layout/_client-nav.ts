import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Projects',
    url: '/projects',
    iconComponent: { name: 'cil-apps' },
    children : [
      {
        name :'all projects',
        url  :'projects/allprojects'
      }

    ]
  }


];
