import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private apiUrl = 'http://localhost:8000/api/pdf'
   
  constructor(private http: HttpClient) { }

  createContract(clientId: number, contractData: any): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/download/${clientId}`, contractData, { responseType: 'blob' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  
  getContractsByClientId(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/contract-client/${clientId}`);
  }

  updateContract(contractId: number, contractData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update-contract/${contractId}`, contractData);
  }

  deleteContract(contractId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete-contract/${contractId}`);
  }

}