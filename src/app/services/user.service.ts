import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { users } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser!: users;
  isUserLoggedIn = false;

  constructor() {}

  setCurrentUser(user: users) {
    console.log(user);
    this.currentUser = user;
    this.isUserLoggedIn = true;
  }

  removeUser() {
    this.isUserLoggedIn = false;
  }
}
