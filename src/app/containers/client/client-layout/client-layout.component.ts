import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss'],
})
export class ClientLayoutComponent implements OnInit {

  user: any;
  userPhoto: string = '';
  isNavbarCollapsed: boolean = true;
  isDropdownOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const userData = localStorage.getItem('Client');
    if (userData) {
      this.user = JSON.parse(userData);
      this.userPhoto = "http://localhost:8000" + this.user.photo;
    }
  }
  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
