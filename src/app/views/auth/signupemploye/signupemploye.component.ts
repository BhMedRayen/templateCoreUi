import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signupemploye',
  templateUrl: './signupemploye.component.html',
  styleUrl: './signupemploye.component.css'
})
export class SignupemployeComponent {
  passwordVisible: boolean = false;
  passwordVisible2: boolean = false;
  currentPage = 1;
  itemsPerPage = 3; // Adjust as needed
  totalItems = 9; // Total number of items, adjust as needed
  checkboxValues: boolean[] = [false, false, false, false, false, false, false, false];
  showAlert: boolean = false;
  alertMessage: string = '';
  skills : String [] = [];

  constructor(private http: HttpClient, private router: Router) {} 

  
  saveSkills() {
    // Clear the existing skills array
    this.skills = [];

    // Iterate over the checkboxValues array to determine the selected skills
    this.checkboxValues.forEach((isChecked, index) => {
      if (isChecked) {
        // Get the name of the skill based on the index and add it to the skills array
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
    // Reset alert status
    this.showAlert = false;
    this.alertMessage = '';

    // Get form inputs
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const emailInput = document.getElementById('exampleInputEmail1') as HTMLInputElement;
    const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('exampleInputPassword2') as HTMLInputElement;
    const agreeCheckbox = document.getElementById('agreeCheckbox') as HTMLInputElement;

    // Check if any required field is empty
    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
      this.showAlert = true;
      this.alertMessage = 'All the inputs are required';
      return false;
    }

    // Check if password and confirm password match
    if (passwordInput.value !== confirmPasswordInput.value) {
      this.showAlert = true;
      this.alertMessage = 'You should put the same password';
      return false;
    }

    // Check if terms are agreed
   
    if (!agreeCheckbox.checked) {
      this.showAlert = true;
      this.alertMessage = 'Aliret Terms are required';
      return false;
    }

    // All validations passed
    return true;
  }

  
  submitForm() {
    if (this.validateForm()) {
      const serializedSkills = JSON.stringify(this.skills);
      const formData = {
        name: (document.getElementById('firstName') as HTMLInputElement).value,
        lastname: (document.getElementById('lastName') as HTMLInputElement).value,
        email: (document.getElementById('exampleInputEmail1') as HTMLInputElement).value,
        password: (document.getElementById('exampleInputPassword1') as HTMLInputElement).value,
        sex: (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value,
        type: "employee",
        confirmed: false,
        skills: serializedSkills,
      };

      this.http.post<any>('http://localhost:8000/api/user/createUser', formData)
        .subscribe(
          response => {
            this.router.navigate(['/verify-email-employee']);

            this.http.post<any>('http://localhost:8082/user/createUser', formData)
              .subscribe(
                response => {
                  console.log("account created on spring boot data base")
                },
                error => {
                  console.error('Error creating user on second URL: ', error);
                }
              );
          },
          error => {
            console.error('Error creating user: ', error);
            if (error.error instanceof ErrorEvent) {
              console.error('Client-side error: ', error.error.message);
            } else {
              console.error(`Server-side error: ${error.status} - ${error.error.message}`);
            }
          }
        );

      const email = formData.email;
      this.http.post<any>(`http://localhost:8000/api/user/RenvoyerEmail/${email}`, {}).subscribe(
        response => {
          console.log("Verification email sent successfully");
        },
        error => {
          console.error('Error sending verification email: ', error);
        }
      );
    }
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
