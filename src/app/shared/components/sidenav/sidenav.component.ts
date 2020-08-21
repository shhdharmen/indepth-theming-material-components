// src\app\shared\components\sidenav\sidenav.component.ts

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() themeColor = '';
  constructor() {}

  ngOnInit(): void {}
}
