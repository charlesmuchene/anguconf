import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	static readonly baseUrl = environment.apiUrl + '/api';

	constructor(private http: HttpClient) {}

	get<T>(url: string): Observable<T> {
		return this.http.get(url) as Observable<T>;
	}

	post(url: string, body: Object): Observable<any> {
		return this.http.post(url, body);
	}
}
