import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-session-form',
	templateUrl: './session-form.component.html',
	styleUrls: [ './session-form.component.css' ]
})
export class SessionFormComponent implements OnInit {
	private sessionForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.createForm();
	}

	private createForm() {
		this.sessionForm = this.formBuilder.group({
			title: [ 'All architecture', [ Validators.required, Validators.min(3) ] ],
			content: [ 'All about architecture', [ Validators.required, Validators.min(3) ] ],
			time: [ new Date(), [ Validators.required ] ]
		});
	}

	private asyncTitleValidator(title: FormControl): Observable<any> | null {
		// TODO Make ajax call to verify title doesn't exist
		return null;
  }
  
  private cancel() {
    confirm('What?')
  }

	private onSubmit() {
		console.log(this.sessionForm.valid);
	}
}
