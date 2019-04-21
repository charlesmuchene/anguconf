import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TicketsComponent } from './ticket/tickets/tickets.component';

@NgModule({
  declarations: [AppComponent, TicketsComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule {}