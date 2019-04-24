import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
	private usersUrl = `${ApiService.baseUrl}/users`;

	constructor(private apiService: ApiService, private tokenService: TokenService) {
	}

	login(user: User) {
		const url = `${this.usersUrl}/login`;
		return this.doPost(url, user)
	}

	signup(user: User) {
		return this.doPost(this.usersUrl, user)
	}

	private doPost(url: string, user: User) {
		return this.apiService.post(url, user)
		.pipe(
			map(data => {
				const token = data.token;
				if (!!token) this.tokenService.saveToken(token)
				return !!token;
			})	
		)
	}
}
