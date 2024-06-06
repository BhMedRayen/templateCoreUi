import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit {
 
  password: string = '';
  loading : boolean = false
  userPhoto : string = ''
  selectedFile: File | null = null;
  constructor (
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userData: any },
    private userService : UsersService
    
  ) {}
 
 
 
 
  ngOnInit(): void {
      this.userPhoto = 'http://localhost:8000'+ this.data.userData.photo
      console.log("user data " , this.data.userData);
      
  }

  closeDialog() {
    this.dialogRef.close()
  }
   onUpdateUser(): void {
    const userData = {
      id: this.data.userData.id,
      name: this.data.userData.name,
      lastname: this.data.userData.lastName,
      skills: this.data.userData.skills,
      phone: this.data.userData.phone,
    };

 
    console.log("user data ", userData);
    this.loading=true
    this.userService.updateUserData(userData).subscribe({
      next : (response : any)=> {
        console.log('User updated successfully:', response);
        this.loading=false
        this.dialogRef.close();
      },
      error : (error : any)=> {
        console.error('Error updating user:', error);
        this.loading=false
      }
    }
    );
  }
  


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log("selected file ", this.selectedFile);
  }
}
