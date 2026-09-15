import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TicketElement } from '../../../../utils/ticket-element.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-client-tickets',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './client-tickets.component.html',
  styleUrl: './client-tickets.component.css',
})
export class ClientTickets {
  displayedColumns: string[] = ['song', 'artist', 'year'];
  
  dataSource: TicketElement[] = [
    { song: 'The Sliding Mr. Bones (Next Stop, Pottersville)', artist: 'Malcolm Lockyer', year: 1961 },
    { song: 'Witchy Woman', artist: 'The Eagles', year: 1972 },
    { song: 'Shining Star', artist: 'Earth, Wind, and Fire', year: 1975 }
  ];
}
