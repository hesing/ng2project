import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../../../shared/models/user';

@Component({
	templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
	user: User;

	constructor(private route: ActivatedRoute, private userService: UsersService) {}

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.userService.getUser(id)
			.subscribe(user => this.user = user);
	}

	updateUser(user: User){
		this.userService.updateUser(user)
			.subscribe(user => {
				console.log("Updated User:");
				console.log(user);
			});
	}
}