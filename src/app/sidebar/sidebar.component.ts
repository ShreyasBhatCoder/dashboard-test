import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MenuItem } from '../../../utils/menu-item.model';
import { MatIconModule } from '@angular/material/icon';
import { Main } from '../main/main.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-sidebar',
  imports: [MatDividerModule, MatIconModule, Main, MatTooltipModule, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  host: {
    "(window:resize)": "onResize()"
  }
})
export class Sidebar {
  isExpanded = true;
  isDesktop = false;

  menuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'confirmation_number', label: 'Ticket Manager' },
    { icon: 'settings', label: 'Settings' }
    // { icon: 'help-circle', label: 'Help' },
  ];


  ngOnInit(): void {
    this.updateScreenMode();
  }

  onResize(): void {
    this.updateScreenMode();
  }
  

  private updateScreenMode(): void {
    this.isDesktop = window.innerWidth >= 1201;
  }

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
  logout(): void {
    console.log('Logging out...');
  }
}
