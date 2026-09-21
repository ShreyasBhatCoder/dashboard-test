import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Client } from './client.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-client-list',
  imports: [MatCardModule, MatIconModule, MatButtonToggleGroup, MatButtonToggle, MatFormFieldModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
})
export class ClientList {
  columns: string[] = ["Name", "Email", "Contact", "Contract Type"]
  clientList: Client[] = [
    { id: "C001", name: "Siri", email: "[EMAIL_ADDRESS]", contact: "+91-9876543210", contractType: "Retainer" },
    { id: "C002", name: "Ravi", email: "[EMAIL_ADDRESS]", contact: "+91-9876543211", contractType: "Hourly" },
    { id: "C003", name: "Mona", email: "[EMAIL_ADDRESS]", contact: "+91-9876543212", contractType: "Project based" },
    { id: "C004", name: "Shreyas", email: "[EMAIL_ADDRESS]", contact: "+91-9876543213", contractType: "Retainer" },
    { id: "C005", name: "Adarsh", email: "[EMAIL_ADDRESS]", contact: "+91-9876543214", contractType: "Hourly" },
  ];
}
