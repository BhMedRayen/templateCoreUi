import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

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
  }


];
