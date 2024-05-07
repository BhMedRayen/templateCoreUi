import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginFailed: boolean = false;
  showAlert: boolean = false;
  passwordVisible: boolean = false;



  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  verifyEmail(email: string) {

    const apiUrl = `http://localhost:8000/api/user/verify/${email}`;
    this.http.post<any>(apiUrl, {}).subscribe(
      (response) => {
        console.log('Email verified successfully:', response);

        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error verifying email:', error);
      }
    );
  }


  togglePasswordVisibility() {

    this.passwordVisible = !this.passwordVisible;

  }
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.route.queryParams.subscribe(params => {
      const email = params['email'];
      if (email) {
        this.verifyEmail(email);
        console.log("email verified");
      }
    });


  }

  onSubmit() {

    if (this.loginForm.invalid) {
      if (this.loginForm.controls['email'].hasError('required') || this.loginForm.controls['password'].hasError('required')) {
        this.showAlert = true
      }
      return;
    }



    const apiUrl = 'http://localhost:8082/user/login';
    const loginData = this.loginForm.value;

    this.http.post<any>(apiUrl, loginData).subscribe(
      (response) => {
        const { user, token } = response;
        localStorage.setItem('token', token);
        this.fetchUserByEmail(user.email);

      },
      (error) => {
        console.error('Error:', error);
        this.showAlert = true;
        this.loginFailed = true;
      }
    );
  }

  fetchUserByEmail(email: string) {
    const apiUrl = `http://localhost:8000/api/user/findUserByEmail?email=${email}`;
    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        const userData = response.data;
        console.log('User details:', userData);

        if (userData.type === 'employee' && userData.email_verified_at !== null && userData.confirmed === 1) {
          console.log('Navigating to employee interface');
          this.router.navigate(['/interface-employee']);
        } else if (userData.type === 'employee' && userData.confirmed === 0) {
          console.log('Navigating to sended-request');
          this.router.navigate(['/sended-request']);
        } else if (userData.type === 'client' && userData.email_verified_at !== null ) {
          console.log('Navigating to client interface');
          this.router.navigate(['/interface-client']);
        } else if (userData.email_verified_at === null) {
          console.log('Navigating to verify-email');
          this.router.navigate(['/verify-email']);
        }
      },
      (error) => {
        console.error('Error fetching user by email:', error);
        console.log('Full error response:', error);
      }
    );
  }


}

