import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../../shared/models/user';

@Injectable()
export class UsersService {
	private usersUrl:string = 'https://reqres.in/api/users';

	// Observable source
	private userCreatedSource = new Subject<User>();
	private userDeletedSource = new Subject();

	// Observable stream
	userCreated$ = this.userCreatedSource.asObservable(); 
	userDeleted$ = this.userDeletedSource.asObservable(); 



	constructor(private http: Http) {

	}

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
		let headers = new Headers();
		let token = localStorage.getItem('auth_token');
		headers.append('Authorization', `Bearer ${token}`);

		return this.http.get(this.usersUrl, { headers })
				.map(res => res.json().data)
				.map(users => users.map(this.mapUser));
	}

	// Get single user
	getUser(id): Observable<User>{
		let headers = new Headers();
		let token = localStorage.getItem('auth_token');
		headers.append('Authorization', `Bearer ${token}`);

		return this.http.get(`${this.usersUrl}/${id}`, { headers })
				.map(res => res.json().data)
				.map(this.mapUser);
	}

	// Create a user
	createUser(user:User): Observable<User>{
		return this.http.post(`${this.usersUrl}`, user)
				.map(res => res.json())
				.do(user => {
					this.userCreatedSource.next(user);
				});
	}

	// Update a user
	updateUser(user:User): Observable<User>{
		return this.http.put(`${this.usersUrl}/${user.id}`, user)
				.map(res => res.json().data)
				.map(this.mapUser);
	}

	// Delete a user
	removeUser(user:User): Observable<any>{
		return this.http.delete(`${this.usersUrl}/${user.id}`)
					.do(() => {
						this.userDeletedSource.next();
					})
	}

}