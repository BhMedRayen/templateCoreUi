import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'auth_token'; // Key used to store the token in localStorage

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  // Optional: You can add a method to remove the token if needed
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
