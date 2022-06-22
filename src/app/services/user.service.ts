import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { users } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser!: users;
  isUserLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }
  constructor() {}

  setCurrentUser(user: users) {
    console.log(user);
    this.currentUser = user;
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
  }

  autoLogin() {
    const string_user = localStorage.getItem('user');
    if (string_user != null) {
      var user = JSON.parse(string_user);
      this.currentUser = user;
    }
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
