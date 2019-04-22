import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ LoginComponent, SignUpComponent ],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatCheckboxModule,
		MatButtonModule
	],
	providers: [ HomeService ],
	bootstrap: [ LoginComponent, SignUpComponent ]
})
export class HomeModule {}
