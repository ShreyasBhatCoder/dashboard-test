import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class Header {
  
  isDarkMode = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.document.body.classList.toggle('dark', this.isDarkMode);
  }
}
