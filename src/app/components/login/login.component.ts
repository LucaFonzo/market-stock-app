import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  email = "";
  password = "";
  readonly _userService = inject(UserService);

  constructor() {
  }

  login() {
    this._userService.login({ email: this.email, password: this.password }).subscribe(result => {
      console.log(result);
    })
  }
}
