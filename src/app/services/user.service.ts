import { Injectable } from '@angular/core';
import { users } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser!: users;
  isUserLoggedIn = false;

  constructor() {}

  setCurrentUser(user: users) {
    this.currentUser = user;
    this.isUserLoggedIn = true;
  }

  removeUser() {
    this.isUserLoggedIn = false;
  }
}
