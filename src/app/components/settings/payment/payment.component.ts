import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from 'src/app/models/users.model';
import { SettingsService } from 'src/app/services/settings.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  currentUser!: users;
  editMode = false;
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years: number[] = [];
  paymentForm: FormGroup;
  constructor(
    private us: UserService,
    private settingsService: SettingsService
  ) {
    this.paymentForm = new FormGroup({
      cred: new FormControl(null),
      month: new FormControl(null),
      year: new FormControl(null),
      cvv: new FormControl(null),
    });
    for (let i = 2022; i < 2026; i++) {
      this.years.push(i);
    }
  }

  ngOnInit(): void {
    this.currentUser = this.us.currentUser;
    this.us.userUpdated$.subscribe(() => {
      this.currentUser = this.us.currentUser;
    });
  }

  toggleEditMode() {
    if (this.editMode) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }

  onSubmit() {
    this.us.updateUserPayment(this.paymentForm.value).subscribe(() => {
      this.settingsService.editModeChanged$.next(false);
      this.settingsService.endEdit();
      this.editMode = false;
    });
  }

  resetForm() {
    this.paymentForm.reset();
  }
}
