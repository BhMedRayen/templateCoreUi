import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'token';

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /**
   * Getting isAuthenticated
   */
  getIsAuth() {
    return this.getToken() != '';
  }

  logout() {
    this.removeToken()
    localStorage.clear();
  }
}
