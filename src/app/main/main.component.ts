import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-main',
  imports: [Dashboard],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class Main {}
