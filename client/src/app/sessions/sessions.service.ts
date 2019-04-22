import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';

@Injectable({
	providedIn: 'root'
})
export class SessionsService {
	constructor(private apiService: ApiService) {}

	getSessions() {
		this.apiService.get<Session>('http://localhost:1234/api/sessions').subscribe((data) => console.log(data));
	}
}
