import { Component } from '@angular/core';

import { navItems } from './navItems';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.scss'],
})
export class EmployeeLayoutComponent {

  public navItems = navItems;

  constructor() {}
}
