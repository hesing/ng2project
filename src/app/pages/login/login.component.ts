import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	user = {
		username: '',
		password: ''
	};

	constructor(private authService: AuthService) {}

	ngOnInit() {
		
	}

	login(user){
		this.authService.login(this.user.username, this.user.password)
			.subscribe(
				data => {
					console.log(data);
				},
				err => {
					console.log(err);
				});
	}
}