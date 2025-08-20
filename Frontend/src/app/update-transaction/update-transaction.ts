import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction-service';

@Component({
  selector: 'app-update-transaction',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './update-transaction.html',
  styleUrl: './update-transaction.css'
})
export class UpdateTransaction implements OnInit {
  id: number | null = null;
transaction:Transaction = new Transaction();

constructor(
  private transactionService: TransactionService,
  private route: ActivatedRoute,
  private router: Router
) {}

 

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam !== null ? Number(idParam) : null;
    if (this.id != null) {
      this.transactionService.getTransactionUpdate(this.id).subscribe((data: Transaction) => {
        this.transaction = data;
      });
    }
  }



  onSubmit(){
    if (this.id == null) { return; }
    this.transactionService.updateTransaction(this.id, this.transaction).subscribe({
      next: (data: Transaction) => {
        this.transaction = data;
        this.goToTransaction();
      },
      error: (err) => console.error('Update failed:', err)
    });
  }

  goToTransaction(){
    this.router.navigate(['/history']);
  }
}



