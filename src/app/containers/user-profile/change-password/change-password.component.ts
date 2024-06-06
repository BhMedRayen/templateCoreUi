import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  standalone : true , 
  imports : [
    FormsModule,
    CommonModule
  ],
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  loading : boolean = false 

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private userService: UsersService
  ) {}

  ngOnInit(): void {}

  updatePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = "Passwords don't match.";
      return;
    }

    const userData = {
      id: this.data.id,
      new_password: this.newPassword,
      new_password_confirmation: this.confirmPassword
    };

    this.loading = true;
    this.userService.updatePassword(userData)
      .subscribe({
        next: (response: any) => {
          console.log('Password updated successfully', response);
          this.loading = false;
          this.dialogRef.close();
        },
        error: (error: any) => {
          this.loading = false;
          console.error('Failed to update password', error);
          this.dialogRef.close()
        }
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
