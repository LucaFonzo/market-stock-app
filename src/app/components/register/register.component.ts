import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  readonly _userService = inject(UserService);
  router = inject(Router);
  hide = true;
  hideRepeat = true;
  email = "";
  password = "";
  repeatedPassword = "";
  constructor() {
  }

  register() {
    if (this.password === this.repeatedPassword && this.password.length >= 6) {
      this._userService.register({ email: this.email, password: this.password }).subscribe(result => {
        console.log(result);
        this.router.navigate(['/login']);
      });
    }
  }
}
