import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  editMode = false;
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years: number[] = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 2022; i < 2026; i++) {
      this.years.push(i);
    }
  }

  toggleEditMode() {
    if (this.editMode) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }
}
