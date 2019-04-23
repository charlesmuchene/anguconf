import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	
	static readonly baseUrl = 'http://localhost:1234/api';

	constructor(private http: HttpClient) {
	}

	get<T>(url: string): Observable<T> {
		return this.http.get(url) as Observable<T>;
	}

	post(url: string, body: Object): Observable<any> {
		return this.http.post(url, body);
	}
}
