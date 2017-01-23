import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: any;
  
  constructor(private userService: UsersService) { }

  ngOnInit() {
  	this.userService.getUsers()
  		.subscribe(resData => this.users = resData);
  }

}
