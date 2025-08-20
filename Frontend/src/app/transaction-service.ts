import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  createAccount(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}`, transaction);
  }
  
  constructor(private http: HttpClient){}

private apiUrl = '/api/transaction';
  // Example: GET request
  getTransaction():Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}`);
  }

  getTransactionUpdate(id:number): Observable<Transaction>{
      return this.http.get<Transaction>(`${this.apiUrl}/${id}`);
  }

  updateTransaction(id:number , transaction:Transaction): Observable<Transaction>{
    return this.http.put<Transaction>(`${this.apiUrl}/${id}` , transaction);
  }

}

