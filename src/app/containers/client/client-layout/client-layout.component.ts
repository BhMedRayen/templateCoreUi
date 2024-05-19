// client-layout.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss'],
})
export class ClientLayoutComponent implements OnInit {

  user: any;

  constructor() { }


  isDropdownOpen = false;


  ngOnInit(): void {
    const userData = localStorage.getItem('Client');
    if (userData) {
      this.user = JSON.parse(userData);
    }  
  }

  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
