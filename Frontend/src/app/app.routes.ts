import { Routes } from '@angular/router';
import { TransactionHistory } from './transaction-history/transaction-history';
import { CreateTransaction } from './create-transaction/create-transaction';
import { UpdateTransaction } from './update-transaction/update-transaction';
import { Home } from './home/home';
export const routes: Routes = [
    { path: 'history', component: TransactionHistory },
    { path: 'create', component: CreateTransaction },
    { path: 'update/:id', component: UpdateTransaction },
    { path: '', redirectTo: 'history', pathMatch: 'full' }
];
