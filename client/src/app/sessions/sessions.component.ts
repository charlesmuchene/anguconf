import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: [ './sessions.component.css' ]
})
export class SessionsComponent implements OnInit {
	allSessions = [
		new Session(`Session re`, 'Content'),
		new Session(`Session two`, 'Content'),
		new Session(`Session thred`, 'Content')
	];
	userSessions: Session[] = [];
	private userList = 'user-list';
	constructor() {}

	ngOnInit() {}

	drop(event: CdkDragDrop<Session[]>) {
		if (event.previousContainer !== event.container) {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
			const attending = event.container.id === this.userList;
			this.changeAttendance(attending, event.item.data);
		} else {
			moveItemInArray(this.allSessions, event.previousIndex, event.currentIndex);
		}

		// TODO when empty, give prompt
		// TODO Save the state in redux
	}

	private changeAttendance(attending: boolean, session: Session) {
		session.userattending = attending;
		session.attendingTitle = attending ? 'Attending' : 'Not attending';
	}
}
