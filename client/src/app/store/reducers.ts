import { SERVER_SESSIONS, ACCESS_TOKEN } from './actions';
import { Action } from './../models/action.model';
import { AppState } from './store';

export function mainReducer(state: AppState, action: Action): AppState {
	switch (action.type) {
		case SERVER_SESSIONS: {
			const object = {};
			object[SERVER_SESSIONS] = action.payload || [];
			return Object.assign({}, state, object);
		}
		case ACCESS_TOKEN: {
			state.serverSessions;
			const object = {};
			object[ACCESS_TOKEN] = action.payload || null;
			return Object.assign({}, state, object);
		}
	}
	return state;
}
