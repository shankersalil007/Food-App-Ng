import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { users } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  userUpdated$ = new Subject<boolean>();

  currentUser!: users;
  isUserLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

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

  updateUserProfile(value: {
    name: string;
    lname: string;
    email: string;
    password: string;
  }) {
    const newUser = {
      ...this.currentUser,
      fname: value.name,
      lname: value.lname,
      email: value.email,
      password: value.password,
    };
    this.http
      .put('http://localhost:3000/users/' + this.currentUser.id, newUser)
      .subscribe(() => {
        this.currentUser = newUser;
        this.userUpdated$.next(true);
      });
  }
}
