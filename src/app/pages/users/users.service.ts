import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';

@Injectable()
export class UsersService {
	private usersUrl:string = 'https://reqres.in/api/users';
	constructor(private http: Http) {}

	// map user to desired format
	private mapUser(user): User{
		return {
			id: user.id,
			name: `${user.first_name} ${user.last_name}`,
			username: user.first_name,
			avatar: user.avatar
		};
	}

	// Get all users
	getUsers(): Observable<User[]>{
		return this.http.get(this.usersUrl)
				.map(res => res.json().data)
				.map(users => users.map(this.mapUser));
	}

	// Get single user
	getUser(id): Observable<User>{
		return this.http.get(`${this.usersUrl}/${id}`)
				.map(res => res.json().data)
				.map(this.mapUser);
	}

	// Create a user

	// Update a user

	// Delete a user
}