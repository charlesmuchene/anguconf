import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';
import { Action } from '../models/action.model';
import { createServerSessionsAction, createUserSessionsAction, SERVER_SESSIONS } from '../store/actions';
import { Observable } from 'rxjs';

@Injectable()
export class SessionsService {
	private sessionUrl = `${ApiService.baseUrl}/sessions`;

	constructor(private apiService: ApiService, private ngRedux: NgRedux<AppState>) {}

	getSessions() {
		return this.apiService.get<Session[]>(this.sessionUrl).subscribe(
			(sessions) => {
				sessions = Object.keys(sessions).length == 0 ? [] : sessions;
				this.ngRedux.dispatch<Action>(createServerSessionsAction(sessions));
				this.saveServerSessions(sessions);
			},
			(error) => console.log(error)
		);
	}

	saveUserSessions(sessions: Session[]) {
		this.ngRedux.dispatch<Action>(createUserSessionsAction(sessions));
	}

	saveServerSessions(sessions: Session[]) {
		localStorage.setItem(SERVER_SESSIONS, JSON.stringify(sessions));
	}

	uploadSession(session: Session): Observable<any> {
		return this.apiService.post(this.sessionUrl, session);
	}
}
