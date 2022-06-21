import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  editModeChanged$ = new Subject<boolean>();
  editMode = false;

  constructor() {}

  startEdit() {
    this.editMode = true;
    this.editModeChanged$.next(this.editMode);
  }

  endEdit() {
    this.editMode = false;
    this.editModeChanged$.next(this.editMode);
  }
}
