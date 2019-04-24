import { User } from '../models/user.model';
import { select } from '@angular-redux/store';
import { Subscription, Observable } from 'rxjs';
import { Session } from '../models/session.model';
import { SessionsService } from './sessions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from './../services/token.service';
import { SERVER_SESSIONS, USER_SESSIONS } from './../store/actions';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: [ './sessions.component.css' ]
})
export class SessionsComponent implements OnInit, OnDestroy {
	user: User = null;
	userListId = 'user-list';
	allSessions: Session[] = [];
	userSessions: Session[] = [];
	private sessionsStoreSubscription: Subscription;
	private userSessionsStoreSubscription: Subscription;

	@select(SERVER_SESSIONS) serverSessions$: Observable<Session[]>;
	@select(USER_SESSIONS) userSessions$: Observable<Session[]>;

	@ViewChild('allList') allList: CdkDropList;
	@ViewChild('userList') userList: CdkDropList;

	constructor(
		private sessionsService: SessionsService,
		private router: Router,
		private route: ActivatedRoute,
		private tokenService: TokenService
	) {}

	ngOnInit() {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.registerStoreListeners();
			this.sessionsService.getSessions();
			this.loadUser();
		});
	}

	ngOnDestroy(): void {
		this.sessionsStoreSubscription.unsubscribe();
		this.userSessionsStoreSubscription.unsubscribe();
	}

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

	onAttendanceChanged(checked: boolean, index: number, session: Session, event: string) {
		const inUserList = event === this.userListId;
		const previous = inUserList ? this.userList : this.allList;
		const current = inUserList ? this.allList : this.userList;
		this.transferItem(session, previous, current, index, 0);
	}

	addSession() {
		this.router.navigate([ 'create' ], { relativeTo: this.route });
	}

	private registerStoreListeners() {
		this.sessionsStoreSubscription = this.serverSessions$.subscribe((sessions) => {
			this.allSessions = sessions || [];
		});

		this.userSessionsStoreSubscription = this.userSessions$.subscribe(
			(sessions) => (this.userSessions = sessions || [])
		);
	}

	private loadUser() {
		this.user = this.tokenService.user;
	}
}
