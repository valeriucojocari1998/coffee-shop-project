import { Component, OnInit } from '@angular/core';
import { NavigationKeys } from '../../enums/global/navigation.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navigationKeys = [...Object.values(NavigationKeys)];

  constructor() {}

  ngOnInit() {}
}
