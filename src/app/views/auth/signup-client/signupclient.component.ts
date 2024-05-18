import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalModule } from '@coreui/angular';


@Component({
  selector: 'app-signupclient',
  templateUrl: './signupclient.component.html',
  styleUrls: ['./signupclient.component.css'],
})
export class SignupclientComponent {
  passwordVisible: boolean = false;
  passwordVisible2: boolean = false;
  showAlert: boolean = false;
  showSpiner : boolean = false;
  alertMessage: string = '';

  constructor(private http: HttpClient, private router: Router,private spinner: NgxSpinnerService) {} 

  validateForm() {

    this.showAlert = false;
    this.alertMessage = '';
 
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const emailInput = document.getElementById('exampleInputEmail1') as HTMLInputElement;
    const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('exampleInputPassword2') as HTMLInputElement;
    const agreeCheckbox = document.getElementById('agreeCheckbox') as HTMLInputElement;
    
    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
      this.showAlert = true;
      this.alertMessage = 'All the inputs are required';
      return false;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
      this.showAlert = true;
      this.alertMessage = 'You should put the same password';
      return false;
    }
    if (!agreeCheckbox.checked) {
      this.showAlert = true;
      this.alertMessage = 'Aliret Terms are required';
      return false;
    }
    return true;
  }

  submitForm() {
  
    if (this.validateForm()) {
      this.showSpiner=true;
      const formData = {
        name: (document.getElementById('firstName') as HTMLInputElement).value, 
        lastname: (document.getElementById('lastName') as HTMLInputElement).value,
        email: (document.getElementById('exampleInputEmail1') as HTMLInputElement).value,
        password: (document.getElementById('exampleInputPassword1') as HTMLInputElement).value,
        sex: (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value,
        type :("client"),
      };
  
      this.http.post<any>('http://localhost:8000/api/auth/register', formData)
        .subscribe(
          response => {
            this.showSpiner=false;
            this.router.navigate(['/verify-mail']);

            // this.http.post<any>('http://localhost:8082/user/createUser', formData)
            // .subscribe(
            //   response => {
            //    console.log("account created on spring boot data base")
            //   },
            //   error => {       
            //     console.error('Error creating user on second URL: ', error);
            //   }
            // );
          },
          
          error => {       
            console.error('Error creating user: ', error);
            if (error.error instanceof ErrorEvent) {
              console.error('Client-side error: ', error.error.message);
            } else {
              console.error(`Server-side error: ${error.status} - ${error.error.message}`);
            }
            this.showSpiner = false;
          }
        
        );

        const email = formData.email;
        this.http.post<any>(`http://localhost:8000/api/mail/RenvoyerEmail/${email}`, {}) .subscribe(
          response => {
            console.log("Verification email sent successfully");
          },
          error => {
            console.error('Error sending verification email: ', error);
              }
            )
          } 
      }
      
    }
