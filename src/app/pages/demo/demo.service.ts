import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DemoService {
	
	constructor(private http: Http) {}

	getUsers(){
		return this.http.get('https://reqres.in/api/users')
				.map(res => res.json().data);
	}
}