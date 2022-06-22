import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currUser: users = new users(1, 'sherin', 'sherin@tcs.com', '');

  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.autoLogin();
    this.currUser = this.us.currentUser;
  }
}
