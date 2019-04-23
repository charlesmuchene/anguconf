import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppState, INITIAL_STATE } from './store/store';
import { mainReducer } from './store/reducers';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, NgReduxModule, AppRoutingModule, HttpClientModule, MatToolbarModule, MatButtonModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor(private ngRedux: NgRedux<AppState>, private devTools: DevToolsExtension) {
		let enhancers = [];
		// TODO Add dev-mode check
		if (devTools.isEnabled) enhancers = [ ...enhancers, devTools.enhancer() ];
		ngRedux.configureStore(mainReducer, INITIAL_STATE, [], enhancers);
	}
}
