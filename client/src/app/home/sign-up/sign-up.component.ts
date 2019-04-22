import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sign-up',
	templateUrl: '/sign-up.component.html',
	styleUrls: [ './sign-up.component.css' ]
})
export class SignUpComponent implements OnInit {
	private signupForm: FormGroup;
	private emailalreadyexists = 'emailalreadyexists';
	private unmatchedPasswords = 'unmatchedpasswords';

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.createForm();
	}

	private createForm() {
		this.signupForm = this.formBuilder.group(
			{
				firstname: [ 'Charlo', [ Validators.required ] ],
				lastname: [ 'Muchene', [ Validators.required ] ],
				email: [
					'charlo@internet.mwa',
					[ Validators.required, Validators.email ],
					this.asyncEmailValidator.bind(this)
				],
				password: [ 'password', [ Validators.required, Validators.min(3) ] ],
				confirmpassword: [ 'password', [ Validators.required ] ],
				terms: [ 'true', [ Validators.required ] ]
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

	private onSubmit() {
		console.log(this.signupForm, 'done', this.signupForm.valid);
	}
}
