import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DemoService {
	
	constructor(private http: Http) {}

	getUsers(){
		return this.http.get('https://reqres.in/api/users');
	}
}