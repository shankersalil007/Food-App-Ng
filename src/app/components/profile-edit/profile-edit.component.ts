import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { users, Address } from 'src/app/models/users.model';
import { SettingsService } from 'src/app/services/settings.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  editMode!: boolean;
  currentUser!: users;
  profileForm: FormGroup;
  // currentUser = new users(1, 'sherin', 'sherin@tcs.com', '');

  constructor(
    private us: UserService,
    private settingsService: SettingsService
  ) {
    this.editMode = settingsService.editMode;
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.currentUser = this.us.currentUser;
    this.profileForm.setValue({
      name: this.currentUser.fname,
      lname: this.currentUser.lname,
      email: this.currentUser.email,
      password: this.currentUser.password,
    });
    this.settingsService.editModeChanged$.subscribe((resp: boolean) => {
      this.editMode = resp;
    });
    this.us.userUpdated$.subscribe(() => {
      this.currentUser = this.us.currentUser;
    });
  }

  onSubmit() {
    this.us.updateUserProfile(this.profileForm.value);
    this.settingsService.editModeChanged$.next(false);
  }
}
