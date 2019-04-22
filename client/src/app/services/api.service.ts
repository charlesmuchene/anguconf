import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private url = 'http://localhost:1234';
	private sessionsUrl = this.url + '/api/sessions';

	constructor(private http: HttpClient) {}

	getSessions() {
		this.http.get(this.sessionsUrl).subscribe((result) => {
			console.log(result);
		});
	}
}
