import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000/users';
  http = inject(HttpClient);
  constructor() { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.API_URL + "/login", user);
  }

}
