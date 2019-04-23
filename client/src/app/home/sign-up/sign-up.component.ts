import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: '/sign-up.component.html',
	styleUrls: [ './sign-up.component.css' ]
})
export class SignUpComponent implements OnInit {
	private signupForm: FormGroup;
	private emailalreadyexists = 'emailalreadyexists';
	private unmatchedPasswords = 'unmatchedpasswords';

	constructor(private formBuilder: FormBuilder, private homeService: HomeService) {}

	ngOnInit() {
		this.createForm();
	}

	private createForm() {
		this.signupForm = this.formBuilder.group(
			{
				firstname: [ '', [ Validators.required ] ],
				lastname: [ '', [ Validators.required ] ],
				email: [
					'',
					[ Validators.required, Validators.email ],
					this.asyncEmailValidator.bind(this)
				],
				password: [ '', [ Validators.required, Validators.min(3) ] ],
				confirmpassword: [ '', [ Validators.required ] ],
				terms: [ '', [ Validators.required ] ]
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
