// src\app\app.component.ts

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'theming-material-components';

  constructor(private dialog: MatDialog, private notification: NotificationService) {}

  openDialog(themeColor: 'primary' | 'accent' | 'warn'): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: {
        themeColor,
      },
    });
  }

  openNotification(): void {
    this.notification.default('Default Notification');
  }
}
