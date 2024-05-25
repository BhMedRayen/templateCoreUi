import { Component, Input } from '@angular/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../services/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

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
