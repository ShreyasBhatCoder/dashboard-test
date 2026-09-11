import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MenuItem } from '../../../utils/menu-item.model';
import { MatIconModule } from '@angular/material/icon';
import { Main } from '../main/main.component';



@Component({
  selector: 'app-sidebar',
  imports: [MatDividerModule, NgClass, MatIconModule, Main],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class Sidebar {
  isExpanded = true;

  menuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'confirmation_number', label: 'Ticket Manager' },
    { icon: 'settings', label: 'Settings' }
    // { icon: 'help-circle', label: 'Help' },
  ];

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
  logout(): void {
    console.log('Logging out...');
  }
}
