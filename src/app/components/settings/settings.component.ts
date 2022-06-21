import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  editMode = false;
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {}

  onEditClicked() {
    if (this.editMode) {
      this.editMode = false;
      this.settingsService.endEdit();
    } else {
      this.editMode = true;
      this.settingsService.startEdit();
    }

    console.log('edit');
  }
}
