import { Routes } from '@angular/router';
import { StockSearchComponent } from './components/stock-search/stock-search.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [
  { path: '', component: StockSearchComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
