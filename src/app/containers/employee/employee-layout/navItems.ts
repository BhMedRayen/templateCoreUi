import { INavData } from "@coreui/angular";


export const navItems: INavData[] = [
  {
    name: 'My Team Projects',
    url: 'project',
    iconComponent: { name: 'cil-apps' },
    children: [
      {
        name: 'project',
        url: 'project/my-team-project'
      }
    ]
  },


  {
    name: 'Messages',
    url: '/messages',
    iconComponent: { name: 'cil-apps' },
    children: [
      {
        name: 'Inbox',
        url: 'messages/inbox'
      },
    ]
  },
];
