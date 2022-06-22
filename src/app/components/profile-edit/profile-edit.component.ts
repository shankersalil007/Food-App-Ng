import { Component, OnInit } from '@angular/core';
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
  // currentUser = new users(1, 'sherin', 'sherin@tcs.com', '');

  constructor(
    private us: UserService,
    private settingsService: SettingsService
  ) {
    this.editMode = settingsService.editMode;
  }

  ngOnInit(): void {
    this.currentUser = this.us.currentUser;
    this.settingsService.editModeChanged$.subscribe((resp: boolean) => {
      this.editMode = resp;
    });
  }
}
