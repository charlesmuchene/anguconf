export class Session {
	userattending = false;
	attendingTitle = 'Not attending';
	constructor(public title: string, public content: string, public date: Date) {}
}
