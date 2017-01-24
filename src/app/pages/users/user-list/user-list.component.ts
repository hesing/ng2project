import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../../shared/models/user';

@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[];
  
  constructor(private userService: UsersService) { }

  ngOnInit() {
  	this.userService.getUsers()
  		.subscribe(resData => this.users = resData);
  }

  removeUser(user: User){
  	this.userService.removeUser(user)
  		.subscribe(res => {
  			console.log('User Deleted');
  			this.users.splice(this.users.indexOf(user), 1);
  		});
  }

}
