import { SessionsService } from './sessions.service';
import { DialogComponent } from './dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Session } from '../models/session.model';

@Component({
	selector: 'app-session-form',
	templateUrl: './session-form.component.html',
	styleUrls: [ './session-form.component.css' ]
})
export class SessionFormComponent implements OnInit {
	sessionForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private dialog: MatDialog,
		private router: Router,
		private sessionsService: SessionsService
	) {}

	ngOnInit() {
		this.createForm();
	}

	private createForm() {
		this.sessionForm = this.formBuilder.group({
			title: [ 'All architecture', [ Validators.required, Validators.min(3) ] ],
			content: [ 'All about architecture', [ Validators.required, Validators.min(3) ] ],
			date: [ new Date(), [ Validators.required ] ]
		});
	}

	private asyncTitleValidator(title: FormControl): Observable<any> | null {
		// TODO Make ajax call to verify title doesn't exist
		return null;
	}

	cancel() {
		this.dialog.open(DialogComponent).afterClosed().subscribe((result) => {
			if (result) this.router.navigateByUrl('/sessions');
		});
	}

	onSubmit() {
		const date = this.sessionForm.value.date;
		const title = this.sessionForm.value.title;
		const content = this.sessionForm.value.content;
		const session = new Session(title, content, date);
		this.sessionsService.uploadSession(session).subscribe((result) => this.router.navigateByUrl('/sessions'));
	}
}
