import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signuptype',
  templateUrl: './signuptype.component.html',
  styleUrl: './signuptype.component.css'
})
export class SignuptypeComponent {

  selectedType: string | null = null;
  buttonLabel: string = 'Sign Up';
  constructor(private router: Router) {}

  updateButtonLabel() {
    if (this.selectedType === 'client') {
      this.buttonLabel = 'Sign Up as Client';
    } 
    else if (this.selectedType === 'employee') {
      this.buttonLabel = 'Sign Up as Employee';
  
    } else {
      this.buttonLabel = 'Sign Up';
    }
  }
  signUp() {
    if (this.selectedType === 'client') {
      this.router.navigateByUrl('/sign-up-client');
    } else if (this.selectedType === 'employee') {
      this.router.navigateByUrl('/sign-up-employe');
    }
  }


}
