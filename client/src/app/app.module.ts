import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './ticket/tickets/tickets.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent, TicketsComponent],
	imports: [ BrowserModule, AppRoutingModule, MatToolbarModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}