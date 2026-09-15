import { Component } from '@angular/core';
import { ClientTickets } from './client-tickets/client-tickets.component';

@Component({
  selector: 'app-dashboard',
  imports: [ClientTickets],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class Dashboard {}
