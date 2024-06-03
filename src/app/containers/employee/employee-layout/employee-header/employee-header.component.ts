import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AuthService} from "../../../../services/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
})
export class EmployeeHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";
  userPhoto : string =''
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
    const userData = localStorage.getItem('employee');
    if (userData) {
      const user = JSON.parse(userData);
      this.userPhoto = 'http://localhost:8000'+user.photo;
    }
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/auth/login']); 
  }
}
