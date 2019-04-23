import { ACCESS_TOKEN } from './store/actions';
import { TokenService } from './services/token.service';
import { Component, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.template.html',
	styleUrls: [ './app.style.css' ]
})
export class AppComponent implements OnDestroy {
	private title = 'Anguconf';
	private loggedIn = false;
	private tokenSubscription: Subscription;
	@select(ACCESS_TOKEN) accessToken$: Observable<string>;

	constructor(private tokenService: TokenService) {}

	private observeStore() {
		this.tokenSubscription = this.accessToken$
			.pipe(map((token) => this.tokenService.isLoggedInFromToken(token)))
			.subscribe((loggedIn) => (this.loggedIn = loggedIn));
	}

	ngOnDestroy() {
		this.tokenSubscription.unsubscribe();
	}
}
