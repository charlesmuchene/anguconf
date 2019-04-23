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
		return this.ngRedux.getState().accessToken;
	}

	saveToken(token: string) {
		this.ngRedux.dispatch<Action>(createAccessTokenAction(token));
	}

	getUser() {
		const rawToken = this.ngRedux.getState().accessToken;
		const token = this.jwtService.decodeToken(rawToken);
		return token;
	}

	isLoggedInFromToken(token: string | null): boolean {
		return this.jwtService.isTokenExpired(token ? token : this.ngRedux.getState().accessToken);
	}
}
