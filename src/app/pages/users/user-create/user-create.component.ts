import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../../../shared/models/user';

@Component({
	templateUrl: './user-create.component.html'
})
export class UserCreateComponent implements OnInit {
	user: User = {
		name: '',
		username: '',
		avatar: ''
	};
	successMessage: string = '';
	errorMessage: string = '';

	constructor(private route: ActivatedRoute, private userService: UsersService) {}

	ngOnInit() { }

	createUser(user: User){
		this.userService.createUser(user)
			.subscribe(resUser => {
				this.successMessage = 'User was created!';
				this.user = resUser;
			});
	}
}