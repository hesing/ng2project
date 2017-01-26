import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	user = {
		username: '',
		password: ''
	};

	constructor(private router: Router, private authService: AuthService) {}

	ngOnInit() {
		
	}

	login(user){
		this.authService.login(this.user.username, this.user.password)
			.subscribe(
				data => {
					console.log(data);
					this.router.navigate(['/users']);
				},
				err => {
					console.log(err);
				});
	}
}