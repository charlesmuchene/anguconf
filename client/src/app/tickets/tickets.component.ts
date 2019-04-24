import { MatSnackBar } from '@angular/material/snack-bar';
import { Ticket } from './../models/ticket.model';
import { TicketsService } from './tickets.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: [ './tickets.component.css' ]
})
export class TicketsComponent implements OnInit {
	ticketForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private ticketService: TicketsService,
		private snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.createForm();
	}

	onSubmit() {
		const ticket = new Ticket();
		ticket.name = this.ticketForm.value.name;
		ticket.email = this.ticketForm.value.email;
		ticket.phone = this.ticketForm.value.phone;
		ticket.cardno = this.ticketForm.value.cardno;
		ticket.amount = this.ticketForm.value.amount;
		console.log(ticket);
		this.ticketService.createTicket(ticket).subscribe((result) => {
			this.snackBar.open('Ticket bought successfully', '', {
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
			this.router.navigateByUrl('/sessions');
		});
	}

	onCancel() {
		return this.router.navigateByUrl('/sessions');
	}

	private createForm() {
		this.ticketForm = this.fb.group({
			name: [ 'John Doe', [ Validators.required, Validators.minLength(3) ] ],
			email: [ 'jdoe@mwa.web', [ Validators.required, Validators.email ] ],
			phone: [ '+123456789', Validators.minLength(10) ],
			cardno: [ '987654321', Validators.required ],
			amount: [ '600', Validators.required ]
		});
	}
}
