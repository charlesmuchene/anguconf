import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: [ './sign-up.component.css' ]
})
export class SignUpComponent implements OnInit {
	signupForm: FormGroup;
	emailalreadyexists = 'emailalreadyexists';
	unmatchedPasswords = 'unmatchedpasswords';

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
		this.signupForm = this.formBuilder.group(
			{
				firstname: [ 'Internet', [ Validators.required ] ],
				lastname: [ 'User', [ Validators.required ] ],
				email: [
					'mwa@web.conf',
					[ Validators.required, Validators.email ],
					this.asyncEmailValidator.bind(this)
				],
				password: [ 'password', [ Validators.required, Validators.min(3) ] ],
				confirmpassword: [ 'password', [ Validators.required ] ],
				terms: [ 'true' ]
			},
			{ validators: this.passwordMatchValidator }
		);
	}

	private asyncEmailValidator(email: FormControl): Promise<null> {
		// TODO Validate this with the service
		// TODO Make sure to set 'emailalreadyexists' if email exists
		return Promise.resolve<null>(null);
	}

	private passwordMatchValidator(form: FormGroup) {
		const password = form.get('password');
		const confirm = form.get('confirmpassword');
		return password && confirm && password.value === confirm.value ? null : { unmatchedpasswords: true };
	}

	onSubmit() {
		const firstname = this.signupForm.get('firstname').value;
		const lastname = this.signupForm.get('lastname').value;
		const email = this.signupForm.get('email').value;
		const password = this.signupForm.get('password').value;

		const user = new User(firstname, lastname, email, password);
		this.homeService.signup(user).subscribe(
			(loggedIn) => {
				if (loggedIn) {
					this.snackBar.open('Sign up successful!', '', {
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.router.navigateByUrl('/sessions');
				} else confirm('Error signing up');
			},
			(error) =>
				this.snackBar.open('Email already exists', '', { verticalPosition: 'top', horizontalPosition: 'end' })
		);
	}
}
