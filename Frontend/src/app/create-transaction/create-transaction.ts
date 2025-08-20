import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../transaction-service';


@Component({
  selector: 'app-create-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-transaction.html', 
  styleUrl: './create-transaction.css'
})
export class CreateTransaction {
    transaction:Transaction = {
      firstName: '',
      lastName: '',
      userId: 0,
      type: '',
      amount: 0
    };  // 👈 define it here

  constructor(private transactionService: TransactionService){}

  onSubmit(){
    this.saveAccount();
  }

  saveAccount(){
    const payload: Transaction = {
      firstName: this.transaction.firstName?.trim() ?? '',
      lastName: this.transaction.lastName?.trim() ?? '',
      userId: Number(this.transaction.userId) || 0,
      type: this.transaction.type,
      amount: Number(this.transaction.amount) || 0
    };
    this.transactionService.createAccount(payload).subscribe({
      next: (data) => console.log('Created:', data),
      error: (err) => console.error('Create failed:', err)
    });
  }
}
