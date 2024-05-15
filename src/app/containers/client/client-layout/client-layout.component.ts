import { Component } from '@angular/core';

import { navItems } from './_client-nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss'],
})
export class ClientLayoutComponent {

  public navItems = navItems;

  constructor() {}
}
