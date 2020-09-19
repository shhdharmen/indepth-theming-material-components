// src\app\shared\services\notification.service.ts

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar) {}

  default(message: string): void {
    this.show(message, {
      duration: 2000,
      panelClass: 'default-notification-overlay',
    });
  }

  info(message: string): void {
    this.show(message, {
      duration: 2000,
      panelClass: 'info-notification-overlay',
    });
  }

  success(message: string): void {
    this.show(message, {
      duration: 2000,
      panelClass: 'success-notification-overlay',
    });
  }

  warn(message: string): void {
    this.show(message, {
      duration: 2500,
      panelClass: 'warning-notification-overlay',
    });
  }

  error(message: string): void {
    this.show(message, {
      duration: 3000,
      panelClass: 'error-notification-overlay',
    });
  }

  private show(message: string, configuration: MatSnackBarConfig): void {
    configuration.horizontalPosition = 'right';
    configuration.verticalPosition = 'top';
    this.snackBar.open(message, null, configuration);
  }
}
