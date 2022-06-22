import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/users').subscribe((res) => {
      const user = res.find((a: any) => {
        var curren_user = null;
        if (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        ) {
          curren_user = a;
          // console.log(curren_user);
        }
        return curren_user;
      });
      if (user) {
        alert('Login success');
        this.loginForm.reset();
        this.router.navigate(['home']);
        const curren_user = new users(
          user.id,
          user.fname,
          user.email,
          user.password
        );
        curren_user.lname = user.lname;
        curren_user.phone = user.phone;
        curren_user.address = user.address;
        curren_user.payment = user.payment;

        console.log(curren_user);
        this.userService.setCurrentUser(curren_user);
      } else {
        alert('User not found');
      }
    });
  }
}
