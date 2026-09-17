import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MenuItem } from '../../../utils/menu-item.model';
import { MatIconModule } from '@angular/material/icon';
import { Main } from '../main/main.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // <-- 1. Import slide toggle module

@Component({
  selector: 'app-sidebar',
  imports: [MatDividerModule, MatIconModule, Main, MatTooltipModule, NgClass, MatSlideToggleModule], // <-- 2. Add to imports
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  host: {
    "(window:resize)": "onResize()"
  }
})
export class Sidebar implements OnInit {
  isExpanded = true;
  isDesktop = false;
  isDarkMode = false; // <-- 3. Add this class state variable

  menuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'confirmation_number', label: 'Ticket Manager' },
    { icon: 'add_2', label: 'Add New' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'help-circle', label: 'Help' },
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

  // 4. Add this function to actively append the styling class to the page document frame
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // Toggles the .dark class on the body so Tailwind dark utilities kick in automatically
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  logout(): void {
    console.log('Logging out...');
  }
}
