import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../../services/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
})
export class EmployeeHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  constructor(
    private classToggler: ClassToggleService,
    private authService: AuthService, // Inject AuthService
    private router: Router // Inject Router for navigation

) {
    super();
  }

  logout() {
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/auth/login']); // Redirect to login page
  }
}
