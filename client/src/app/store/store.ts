import { Session } from './../models/session.model';

export interface AppState {
	serverSessions: Session[];
	accessToken: string;
}

export const INITIAL_STATE: AppState = {
	serverSessions: [],
	accessToken: null
};
