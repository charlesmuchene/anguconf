import { SessionsService } from './sessions.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Session } from '../models/session.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: [ './sessions.component.css' ]
})
export class SessionsComponent implements OnInit {
	private allSessions = [
		new Session(`Session re`, 'Content'),
		new Session(`Session two`, 'Content'),
		new Session(`Session thred`, 'Content')
	];
	private userSessions: Session[] = [];
	private userListId = 'user-list';

	@ViewChild('allList') allList: CdkDropList;
	@ViewChild('userList') userList: CdkDropList;

	constructor(private sessionsService: SessionsService, private router: Router, private route: ActivatedRoute) {
		sessionsService.getSessions();
	}

	ngOnInit() {}

	drop(event: CdkDragDrop<Session[]>) {
		if (event.previousContainer !== event.container) {
			this.transferItem(
				event.item.data,
				event.previousContainer,
				event.container,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			moveItemInArray(this.allSessions, event.previousIndex, event.currentIndex);
		}
	}

	private transferItem(
		data: Session,
		previousContainer: CdkDropList<Session[]>,
		currentContainer: CdkDropList<Session[]>,
		previousIndex: number,
		currentIndex: number
	) {
		transferArrayItem(previousContainer.data, currentContainer.data, previousIndex, currentIndex);
		const attending = currentContainer.id === this.userListId;
		this.changeAttendance(attending, data);
	}

	private changeAttendance(attending: boolean, session: Session) {
		session.userattending = attending;
		session.attendingTitle = attending ? 'Attending' : 'Not attending';
	}

	private onAttendanceChanged(checked: boolean, index: number, session: Session, event: string) {
		const inUserList = event === this.userListId;
		const previous = inUserList ? this.userList : this.allList;
		const current = inUserList ? this.allList : this.userList;
		this.transferItem(session, previous, current, index, 0);
	}

	private addSession() {
		this.router.navigate([ 'create' ], { relativeTo: this.route });
	}
}
