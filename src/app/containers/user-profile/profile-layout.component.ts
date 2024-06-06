import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { UsersService } from 'src/app/services/users.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MatDialog } from '@angular/material/dialog';
import  {ChangePasswordComponent} from './change-password/change-password.component'

@Component({
  selector: 'user-layout-profile',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss'],
})
export class ProfileLayoutComponent implements OnInit {
  client: any;
  employee: any;
  productOwner: any;
  userId: number = 0;
  employeePhoto: string = '';
  clientPhoto: string = '';
  productOwnerPhoto: string = '';
  userPhoto: string = '';
  isNavbarCollapsed: boolean = true;
  isDropdownOpen: boolean = false;
  parsedSkills: string[] = [];
  selectedFile: File | null = null;
  loading : boolean = false 


  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUserIdFromLocalStorage();
    this.getUserById();
  }

  parseSkills(skills: string | undefined): void {
    if (skills) {
      try {
        this.parsedSkills = JSON.parse(skills);
      } catch (e) {
        console.error('Error parsing skills:', e);
        this.parsedSkills = [];
      }
    } else {
      this.parsedSkills = [];
    }
  }

  loadUserIdFromLocalStorage(): void {
    let userType: string | null;
    userType = localStorage.getItem('employee');
    if (userType) {
      const userData = JSON.parse(userType);
      this.userId = userData.id;
      return;
    }

    userType = localStorage.getItem('product_owner');
    if (userType) {
      const userData = JSON.parse(userType);
      this.userId = userData.id;
      return;
    }

    userType = localStorage.getItem('Client');
    if (userType) {
      const userData = JSON.parse(userType);
      this.userId = userData.id;
      return;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  getUserById(): void {
    this.userService.getUserById(this.userId).subscribe({
      next: (response: any) => {
        if (response.user.type === 'employee') {
          this.employee = response.user;
          this.employeePhoto = 'http://localhost:8000' + this.employee.photo;
          this.parseSkills(this.employee.skills);
          console.log('employee auth ', this.employee);
        } else if (response.user.type === 'product_owner') {
          this.productOwner = response.user;
          this.productOwnerPhoto = 'http://localhost:8000' + this.productOwner.photo;
          this.parseSkills(this.productOwner.skills);
          console.log('admin auth ', this.productOwner);
        } else {
          this.client = response.user;
          this.clientPhoto = 'http://localhost:8000' + this.client.photo;
          this.parseSkills(this.client.skills);
          console.log('client auth', this.client);
        }
      },
      error: (error: any) => {
        console.log('error fetching user');
      },
    });
  }

updateSkills() {

}

updatex(userId: number, formData: FormData) {
  this.userService.updatePhoto(userId, formData).subscribe({
    next: (response: any) => {
      console.log('Photo updated successfully:', response);
    },
    error: (error: any) => {
      console.error('Error updating photo:', error);
    }
  });
}

updatePhoto() {
  let userId: number;
  if (this.employee) {
    userId = this.employee.id;
  } else if (this.productOwner) {
    userId = this.productOwner.id;
  } else if (this.client) {
    userId = this.client.id;
  } else {
    console.error('User type not recognized.');
    return;
  }

  if (this.selectedFile) {
    const formData = new FormData();
    formData.append('photo', this.selectedFile);
    this.updatex(userId, formData);
  } else {
    console.error('No file selected.');
  }
}





onFileSelected(event: any): void {
  this.selectedFile = event.target.files[0];
  this.updatePhoto();
  console.log('Selected file:', this.selectedFile);
  
}

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openUpdateUser(userData: any): void {
    this.dialog.open(UpdateUserComponent, {
      width: '500px',
      data: { userData: userData },
    });
  }

  OpenchangePassword(userData: any) {
    this.dialog.open(ChangePasswordComponent, {
      width: '500px',
      data: { userData: userData },
    });
  }
}
