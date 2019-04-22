import { HomeService } from './../home.service';
import { LoginModel } from '../../models/login.models';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	user: LoginModel = new LoginModel();
	private loginForm: FormGroup;
	hide = true;

	constructor(private formBuilder: FormBuilder, private router: Router, private homeService: HomeService) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: [ this.user.email, [ Validators.required, Validators.email ] ],
			password: [ this.user.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ] ]
		});
	}
	onLoginSubmit() {
		alert(this.user.email + '' + this.user.password);
		// TODO Use homeservice to do api request to login user
	}
	show() {
		this.router.navigateByUrl('sign-up');
	}
}
