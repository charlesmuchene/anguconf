import { TicketsComponent } from './tickets/tickets.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
	declarations: [ AppComponent, TicketsComponent],
	imports: [ BrowserModule,
			   AppRoutingModule,
			   ReactiveFormsModule,
			   MatToolbarModule,
			   BrowserAnimationsModule, 
			   MatFormFieldModule, 
			   MatInputModule,
			   MatButtonModule,
			   MatCardModule
			],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}