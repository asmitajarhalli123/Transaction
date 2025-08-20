import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CreateTransaction } from "./create-transaction/create-transaction";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html' ,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-transactionManager');
}
