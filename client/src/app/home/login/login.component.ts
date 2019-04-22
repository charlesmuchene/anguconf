import { HomeService } from './../home.service';
import { LoginModel } from '../../models/login.models';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	user: LoginModel = new LoginModel();
	private loginForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private homeService: HomeService) {}

	ngOnInit() {
		this.createForm();
	}

	private createForm() {
		this.loginForm = this.formBuilder.group({
			email: [ 'charlo@internet.mwa', [ Validators.required, Validators.email ] ],
			password: [ 'password', [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ] ]
		});
	}
	onSubmit() {
		console.log(this.loginForm.valid);
		// TODO Use homeservice to do api request to login user
	}
}
