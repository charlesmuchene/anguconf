export class User {
	firstname: string;
	lastname: string;
	email: string;
	role: string;

	isAdmin(): boolean {
		return this.role == 'admin';
	}

	getName() {
		return `${this.firstname} ${this.lastname}`;
	}
}
