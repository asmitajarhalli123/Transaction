import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { TransactionHistory } from './transaction-history/transaction-history';
import { CreateTransaction } from './create-transaction/create-transaction';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';



@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers:[
     provideHttpClient()
  ],
 // bootstrap: [App]
})
export class AppModuleModule { }
