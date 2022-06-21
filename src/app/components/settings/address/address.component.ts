import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/models/users.model';
import { SettingsService } from 'src/app/services/settings.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  editMode!: boolean;
  currentUser!: users;

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
