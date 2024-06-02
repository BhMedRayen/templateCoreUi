import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'user-layout-profile',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss'],

})
export class ProfileLayoutComponent implements OnInit {
  
  client : any
  employee : any
  productOwner : any 
  userId : number = 0
  employeePhoto : string = ''
  clientPhoto : string = ''
  productOwnerPhoto : string = ''
  userPhoto: string = '';
  isNavbarCollapsed: boolean = true;
  isDropdownOpen: boolean = false;
  parsedSkills: string[] = [];
  
  constructor(
    private userService : UsersService
  ) {}
  ngOnInit(): void {
    this.loadUserIdFromLocalStorage()
    this.getUserById()

  
   
  }

  
   parseSkills(): void {
    
      this.parsedSkills = JSON.parse(this.employee.skills);
      console.log("skills ", this.parseSkills);
      
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

  

  getUserById() : void {
    this.userService.getUserById(this.userId).subscribe({
      next : (response : any) => {
        if(response.user.type === "employee") {
          this.employee=response.user
          this.employeePhoto= 'http://localhost:8000'+ this.employee.photo
          this.parseSkills()
        
          console.log("employee auth " , this.employee)
        }
        else if (response.user.type ==="product_owner") {
          this.productOwner=response.user
          this.productOwnerPhoto='http://localhost:8000'+this.productOwner.photo
          console.log("admin auth " , this.productOwner);
        
          
        }
        else {
          this.client=response.user
          this.clientPhoto='http://localhost:8000'+this.client.photo
          console.log("client auth",this.client);
         
        }
      },
      error : (error : any)=> {
        console.log("error fetching user");
        
      }
    })
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  

}
