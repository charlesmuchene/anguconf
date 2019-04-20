import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


 
@NgModule({
	declarations: [ AppComponent, LoginComponent, SignUpComponent ],
	imports: [ BrowserModule, AppRoutingModule, MatToolbarModule, BrowserAnimationsModule,ReactiveFormsModule,MatFormFieldModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
