import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from './../home.service';
import { LoginModel } from '../../models/login.models';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	user: LoginModel = new LoginModel();
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private homeService: HomeService,
		private router: Router,
		private snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.createForm();
	}

	private createForm() {
		this.loginForm = this.formBuilder.group({
			email: [ 'mwa@web.conf', [ Validators.required, Validators.email ] ],
			password: [ 'password', [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ] ]
		});
	}

	onSubmit() {
		const email = this.loginForm.get('email').value;
		const password = this.loginForm.get('password').value;
		const user = new User('', '', email, password);
		this.homeService.login(user).subscribe(
			(loggedIn) => {
				if (loggedIn) {
					this.snackBar.open('Logged in successfully', '', {
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.router.navigateByUrl('/sessions');
				} else confirm('Invalid credentials');
			},
			(error) =>
				this.snackBar.open('Invalid credentials', '', { verticalPosition: 'top', horizontalPosition: 'end' })
		);
	}
}
