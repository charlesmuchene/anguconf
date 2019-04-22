import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
	declarations: [ LoginComponent, SignUpComponent ],
	imports: [ CommonModule, BrowserAnimationsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule ],
	bootstrap: [ LoginComponent, SignUpComponent ]
})
export class HomeModule {}
