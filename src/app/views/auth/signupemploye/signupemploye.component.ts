import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-signupemploye',
  templateUrl: './signupemploye.component.html',
  styleUrl: './signupemploye.component.css'
})
export class SignupemployeComponent {
  passwordVisible: boolean = false;
  passwordVisible2: boolean = false;
  currentPage = 1;
  itemsPerPage = 3;
  totalItems = 9; 
  checkboxValues: boolean[] = [false, false, false, false, false, false, false, false];
  showAlert: boolean = false;
  alertMessage: string = '';
  loading : boolean = false 
  skills : String [] = [];
  selectedFile: File | null = null;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private authService : AuthService
    ) {} 

  
  saveSkills() {
  
    this.skills = [];

    
    this.checkboxValues.forEach((isChecked, index) => {
      if (isChecked) {
        const skillName = this.getSkillName(index);
        this.skills.push(skillName);
        console.log(this.skills)
      }
    });
  }

  getSkillName(index: number): string {
    switch (index) {
        case 0:
            return 'Laravel';
        case 1:
            return 'Spring Boot';
        case 2:
            return 'Symfony';
        case 3:
            return 'Node.js';
        case 4:
            return 'Angular';
        case 5:
            return 'React';
        case 6:
            return 'Vue.js';
        case 7:
            return 'Svelte';
        case 8:
            return 'Figma';
        case 9:
            return 'Sketch';
        case 10:
            return 'Adobe XD';
        default:
            return '';
    }
}








  validateForm() {
   
    this.showAlert = false;
    this.alertMessage = '';


    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const emailInput = document.getElementById('exampleInputEmail1') as HTMLInputElement;
    const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('exampleInputPassword2') as HTMLInputElement;
    const agreeCheckbox = document.getElementById('agreeCheckbox') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;

   
    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value || !phone.value) {
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
        const formData = new FormData();
        formData.append('name', (document.getElementById('firstName') as HTMLInputElement).value);
        formData.append('lastname', (document.getElementById('lastName') as HTMLInputElement).value);
        formData.append('phone', (document.getElementById('phone') as HTMLInputElement).value);
        formData.append('email', (document.getElementById('exampleInputEmail1') as HTMLInputElement).value);
        formData.append('password', (document.getElementById('exampleInputPassword1') as HTMLInputElement).value);
        formData.append('sex', (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value);
        formData.append('type', "employee");
        formData.append('confirmed', 'false');
        formData.append('skills', JSON.stringify(this.skills));
  
        if (this.selectedFile) {
            formData.append('photo', this.selectedFile, this.selectedFile.name);
        }
  
        formData.forEach((value, key) => {
          console.log(key, value);
      });

      const user = {
        name: (document.getElementById('firstName') as HTMLInputElement).value,
        lastname: (document.getElementById('lastName') as HTMLInputElement).value,
        email: (document.getElementById('exampleInputEmail1') as HTMLInputElement).value,
        password: (document.getElementById('exampleInputPassword1') as HTMLInputElement).value,
        type: 'employee'
      };

  
        this.loading = true;
  
        this.http.post<any>('http://localhost:8000/api/auth/register', formData)
            .subscribe({
                next: (response: any) => {
                    this.router.navigate(['/auth/verify-mail-employee']);
                    this.authService.createUser(user).subscribe({
                        next: (response: any) => {
                            console.log("user created on spring data base", response);
                        },
                        error: (error: any) => {
                            console.log("error creating user on spring data base ", error);
                        }
                    });
                },
                error: (error: any) => {
                    this.loading = false;
                    console.error('Error creating user: ', error);
                    if (error.error instanceof ErrorEvent) {
                        console.error('Client-side error: ', error.error.message);
                    } else {
                        console.error(`Server-side error: ${error.status} - ${error.error.message}`);
                    }
                },
                complete: () => {
                    this.loading = false;
                }
            });
  
        const email = formData.get('email');
        this.http.post<any>(`http://localhost:8000/api/mail/RenvoyerEmail/${email}`, {}).subscribe(
            response => {
                console.log("Verification email sent successfully");
            },
            error => {
                console.error('Error sending verification email: ', error);
            }
        );
    }
  }
  

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  console.log('Selected file:', this.selectedFile);
}


  get pages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
}

setPage(page: number) {
    this.currentPage = page;
}

nextPage() {
    if (this.currentPage < this.pages.length) {
        this.currentPage++;
    }
}

prevPage() {
    if (this.currentPage > 1) {
        this.currentPage--;
    }
}
isChecked(index: number): boolean {
  return this.checkboxValues[index];
}

toggleCheckbox(index: number) {
  this.checkboxValues[index] = !this.checkboxValues[index];
}

}
