import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
	providedIn: 'root'
})
export class TicketsService {
	private ticketsUrl = `${ApiService.baseUrl}/tickets`;

	constructor(private apiService: ApiService) {}

	getTickets(): Observable<Ticket[]> {
		return this.apiService.get<Ticket[]>(this.ticketsUrl);
	}

	createTicket(ticket: Ticket): Observable<any> {
		return this.apiService.post(this.ticketsUrl, ticket);
	}
}
