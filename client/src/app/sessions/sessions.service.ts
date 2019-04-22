import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';
import { Observable } from 'rxjs';

@Injectable()
export class SessionsService {
	constructor(private apiService: ApiService) {}

	getSessions(): Observable<Session[]> {
		return this.apiService.get<Session[]>('http://localhost:1234/api/sessions');
	}
}
