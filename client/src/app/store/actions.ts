import { Session } from './../models/session.model';
import { Action } from '../models/action.model';

// Verify that app state has the same fields
export const SERVER_SESSIONS = 'serverSessions';
export const USER_SESSIONS = 'userSessions';
export const ACCESS_TOKEN = 'accessToken';

export function createServerSessionsAction(sessions: Session[]): Action {
	return { type: SERVER_SESSIONS, payload: sessions };
}

export function createAccessTokenAction(token: string): Action {
	return { type: ACCESS_TOKEN, payload: token };
}

export function createUserSessionsAction(sessions: Session[]): Action {
	return { type: USER_SESSIONS, payload: sessions };
}
