import { Session } from './../models/session.model';

export interface AppState {
	serverSessions: Session[];
}

export const INITIAL_STATE: AppState = {
	serverSessions: []
};
