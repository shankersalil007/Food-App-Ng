import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  editMode = false;
  currentUser: users = new users(
    1,
    'shan',
    's',
    'ss@tcs.com',
    10,
    'hai',
    '',
    ''
  );

  constructor(private us: UserService) {}

  ngOnInit(): void {
    // this.currentUser = this.us.currentUser;
  }
}
