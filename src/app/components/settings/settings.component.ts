import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  editMode = false;
  hideEdit = false;
  constructor(
    private settingsService: SettingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.router.url);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        if (event.url === '/settings/useraddpaymentdetails') {
          this.hideEdit = true;
        } else {
          this.hideEdit = false;
        }
      }
    });
  }

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
