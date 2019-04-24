import { ACCESS_TOKEN, SERVER_SESSIONS } from './actions';
import { Session } from './../models/session.model';

export interface AppState {
	serverSessions: Session[];
	accessToken: string;
}

export const INITIAL_STATE: AppState = {
	serverSessions: JSON.parse(localStorage.getItem(SERVER_SESSIONS) || '[]'),
	accessToken: localStorage.getItem(ACCESS_TOKEN)
};
