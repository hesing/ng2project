import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user';

@Component({
  template: `
  	<h1 class="my-4 text-center">Users Dashboard</h1>
  	<div class="row">
		<div class="col-sm-3">
			<ul class="list-group">
				<a class="list-group-item" 
					*ngFor="let user of users" [routerLink]="['/dashboard/users', user.username]">{{ user.name }}
				</a>
			</ul>
		</div>
		<div class="col-sm-9">
			<router-outlet></router-outlet>
		</div>
  	</div>
  	
  	`
})
export class DashboardUsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.userService.getUsers()
  		.then(users => this.users = users);
  }

}
