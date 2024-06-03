import { Component, Input, OnInit } from '@angular/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../services/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  userImage : String = ''

  constructor(
    private classToggler: ClassToggleService,
    private authService: AuthService, 
    private router: Router 

  ) {
    super();
  }
  ngOnInit(): void {
    this.getUserPhoto()
   
  }

  getUserPhoto() {
    const userData = localStorage.getItem('product_owner');
    if (userData) {
      const user = JSON.parse(userData);
      this.userImage = 'http://localhost:8000'+user.photo;
    }
  }


  logout() {
    this.authService.logout(); 
    this.router.navigate(['/auth/login']); 
  }
}
