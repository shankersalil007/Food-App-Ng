import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, users } from 'src/app/models/users.model';
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
  currentAddress!: Address;
  addressForm: FormGroup;

  constructor(
    private us: UserService,
    private settingsService: SettingsService
  ) {
    this.editMode = settingsService.editMode;
    this.addressForm = new FormGroup({
      houseno: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      landmark: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.currentUser = this.us.currentUser;
    if (this.currentUser.address != undefined) {
      this.currentAddress = this.currentUser.address[0];
    }

    this.addressForm.setValue({
      houseno: this.currentAddress.houseno,
      city: this.currentAddress.city,
      state: this.currentAddress.state,
      landmark: this.currentAddress.landmark,
    });

    this.settingsService.editModeChanged$.subscribe((resp: boolean) => {
      this.editMode = resp;
    });
    this.us.userUpdated$.subscribe(() => {
      this.currentUser = this.us.currentUser;
      if (this.currentUser.address != undefined) {
        this.currentAddress = this.currentUser.address[0];
      }
    });
  }
  onSubmit() {
    this.us.updateUserAddress(this.addressForm.value);
    this.settingsService.editModeChanged$.next(false);
    this.settingsService.endEdit();
  }
}
