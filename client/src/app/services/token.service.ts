import { ACCESS_TOKEN } from './../store/actions';
import { Action } from '../models/action.model';
import { Injectable, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../store/store';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { createAccessTokenAction } from '../store/actions';
import { Observable, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TokenService implements OnDestroy {
	@select(ACCESS_TOKEN) accessToken$: Observable<string>;

	user: User = null;
	private jwtService = new JwtHelperService();
	private accessTokenSubscription: Subscription;

	constructor(private ngRedux: NgRedux<AppState>) {}

	ngOnDestroy() {
		this.accessTokenSubscription.unsubscribe();
	}

	private observeStore() {
		this.accessTokenSubscription = this.accessToken$.subscribe((token) => (this.user = this.getUser(token)));
	}

	getAccessToken() {
		return this.ngRedux.getState().accessToken;
	}

	saveToken(token: string) {
		this.ngRedux.dispatch<Action>(createAccessTokenAction(token));
		localStorage.setItem(ACCESS_TOKEN, token);
	}

	private getUser(token: string | null = null): User | null {
		const rawToken = !!token ? token : this.ngRedux.getState().accessToken;
		return this.jwtService.decodeToken(rawToken);
	}

	isLoggedInFromToken(token: string | null = null): boolean {
		return !this.jwtService.isTokenExpired(token ? token : this.ngRedux.getState().accessToken);
	}

	logout() {
		localStorage.clear();
		this.ngRedux.dispatch<Action>(createAccessTokenAction(null));
	}
}
