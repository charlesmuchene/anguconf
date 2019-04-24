export class User {
	private role = 'user';
	constructor(public firstname: string = '', public lastname: string  = '', public email: string, public password: string) {
	}

	isAdmin(): boolean {
		return this.role == 'admin';
	}

	getName() {
		return `${this.firstname} ${this.lastname}`;
	}
}
