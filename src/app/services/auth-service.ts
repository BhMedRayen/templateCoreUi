import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:8082/user/createUser'

  constructor(private http: HttpClient) { }

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

  createUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
