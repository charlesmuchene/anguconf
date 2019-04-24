import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { mainReducer } from './store/reducers';
import { TokenService } from './services/token.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppState, INITIAL_STATE } from './store/store';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		NgReduxModule,
		AppRoutingModule,
		HttpClientModule,
		MatToolbarModule,
		MatButtonModule,
		JwtModule.forRoot({
			jwtOptionsProvider: {
				provide: JWT_OPTIONS,
				useFactory: tokenOptionsFactory,
				deps: [ TokenService ]
			}
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor(private ngRedux: NgRedux<AppState>, private devTools: DevToolsExtension) {
		let enhancers = [];

		// TODO Add dev-mode check
		if (!environment.production && devTools.isEnabled) enhancers = [ ...enhancers, devTools.enhancer() ];

		ngRedux.configureStore(mainReducer, INITIAL_STATE, [], enhancers);
	}
}

export function tokenOptionsFactory(tokenService: TokenService) {
	return {
		whitelistedDomains: [
			'http://localhost:1234',
			'localhost:1234',
			'anguconf.herokuapp.com',
			'http://anguconf.herokuapp.com'
		],
		tokenGetter: () => tokenService.getAccessToken()
	};
}
