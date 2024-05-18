import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorComponent } from '../../components/shared/error/error.component'; // Adjust the import based on your project structure

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        // Default error message
        let errorMessage = error.message;

        // Known error message
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }

        // Opening error dialog
        this.dialog.open(ErrorComponent, {
          data: { message: errorMessage },
          width: '400px'
        });

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
