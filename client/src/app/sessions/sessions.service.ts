import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';
import { Action } from '../models/action.model';
import { createServerSessionsAction, createUserSessionsAction } from '../store/actions';

@Injectable()
export class SessionsService {
	constructor(private apiService: ApiService, private ngRedux: NgRedux<AppState>) {}

	getSessions() {
		return this.apiService.get<Session[]>('http://localhost:1234/api/sessions').subscribe((sessions) => {
			this.ngRedux.dispatch<Action>(createServerSessionsAction(sessions));
		});
	}

	saveUserSessions(sessions: Session[]) {
		this.ngRedux.dispatch<Action>(createUserSessionsAction(sessions));
	}
}
