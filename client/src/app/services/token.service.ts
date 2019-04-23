import { Action } from '../models/action.model';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { createAccessTokenAction } from '../store/actions';

@Injectable({
	providedIn: 'root'
})
export class TokenService {
	private jwtService = new JwtHelperService();

	constructor(private ngRedux: NgRedux<AppState>) {}

	getAccessToken() {
		console.log('getting token', this.ngRedux.getState());
		return this.ngRedux.getState().accessToken;
	}

	saveToken(token: string) {
		this.ngRedux.dispatch<Action>(createAccessTokenAction(token));
	}

	getUser(): User | null {
		const rawToken = this.ngRedux.getState().accessToken;
		const token = this.jwtService.decodeToken(rawToken);
		return null;
	}
}
