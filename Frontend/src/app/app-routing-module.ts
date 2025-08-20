import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionHistory } from './transaction-history/transaction-history';
import { App } from './app';
import { CreateTransaction } from './create-transaction/create-transaction';
import { UpdateTransaction } from './update-transaction/update-transaction';
import { Home } from './home/home';

const routes: Routes = [
  {path:'create' , component:CreateTransaction},
  {path:'update', component:UpdateTransaction},
  {path: '' , component:CreateTransaction}
]

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
