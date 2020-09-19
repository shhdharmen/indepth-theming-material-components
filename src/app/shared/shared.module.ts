// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [SidenavComponent, DialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SidenavComponent],
})
export class SharedModule {}
