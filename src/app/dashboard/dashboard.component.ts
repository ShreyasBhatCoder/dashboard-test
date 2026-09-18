import { Component } from '@angular/core';
import { ClientTickets } from './client-tickets/client-tickets.component';
import { Calendar } from './calendar/calendar.component';

@Component({
  selector: 'app-dashboard',
  imports: [ClientTickets, Calendar],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class Dashboard {}
