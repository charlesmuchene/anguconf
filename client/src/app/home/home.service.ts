import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class HomeService {
	constructor(private apiService: ApiService) {}

	login() {
		// TODO Make api request to login
	}
}
