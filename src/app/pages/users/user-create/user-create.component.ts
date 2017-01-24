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

	constructor(private route: ActivatedRoute, private userService: UsersService) {}

	ngOnInit() { }

	createUser(user: User){
		this.userService.createUser(user)
			.subscribe(resUser => {
				console.log("User Created");
				this.user = resUser;
			});
	}
}