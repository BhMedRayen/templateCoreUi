import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return  this.checkAuth();
  }

  canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAuth();
  }

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAuth();
  }

  private checkAuth(): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsAuth(); // Adjust this method name as per your service
    if (!isAuth) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
