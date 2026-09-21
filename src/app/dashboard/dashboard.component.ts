import { Component } from '@angular/core';
import { ClientTickets } from './client-tickets/client-tickets.component';
import { Calendar } from './calendar/calendar.component';
import { ClientList } from './client-list/client-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [ClientTickets, Calendar, ClientList],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class Dashboard {}
