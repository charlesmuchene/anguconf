import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private apiService: ApiService) { }

  getTickets():Observable<Ticket[]>{
    return this.apiService.get<Ticket[]>('http://localhost:1234/api/sessions');
  } 
  createTicket(ticket: Ticket){
    this.apiService.post('http://localhost:1234/api/sessions', ticket)

  }
}