import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';
import { Action } from '../models/action.model';
import { createServerSessionsAction, createUserSessionsAction } from '../store/actions';
import { Observable } from 'rxjs';

@Injectable()
export class SessionsService {
	private sessionUrl = 'http://localhost:1234/api/sessions';

	constructor(private apiService: ApiService, private ngRedux: NgRedux<AppState>) {}

	getSessions() {
		return this.apiService.get<Session[]>(this.sessionUrl).subscribe((sessions) => {
			this.ngRedux.dispatch<Action>(createServerSessionsAction(sessions));
		});
	}

	saveUserSessions(sessions: Session[]) {
		this.ngRedux.dispatch<Action>(createUserSessionsAction(sessions));
	}

	uploadSession(session: Session): Observable<any> {
		return this.apiService.post(this.sessionUrl, session);
	}
}
