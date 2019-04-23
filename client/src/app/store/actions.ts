import { Session } from './../models/session.model';
import { Action } from '../models/action.model';

export const SERVER_SESSIONS = 'server_sessions';

export function createServerSessionsAction(sessions: Session[]): Action {
	return { type: SERVER_SESSIONS, payload: sessions };
}
