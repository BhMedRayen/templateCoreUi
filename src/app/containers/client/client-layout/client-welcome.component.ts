import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-welcome',
  templateUrl: './client-welcome.component.html',
  styleUrls: ['./client-welcome.component.scss'],
})
export class ClientWelcomeComponent implements OnInit {

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

  logNavigation(): void {
    console.log('Navigating to contracts with user ID:', this.user.id);
  }
  
}
