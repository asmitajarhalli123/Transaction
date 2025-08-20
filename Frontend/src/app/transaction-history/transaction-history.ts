import { Component, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css'
})
export class TransactionHistory {
[x: string]: any;
  constructor(private transactionService: TransactionService,
    private router:Router){ }

transactions: Transaction[] = [];



ngOnInit(){
 
  this.getTransactions();
}

  getTransactions(){
    this.transactionService.getTransaction().subscribe(data =>{
      this.transactions = data;
    })
  }

  updateTransaction(id: number | undefined) {
    if (id != null) {
      this.router.navigate(['update', id]);
    }
  }
}
  

