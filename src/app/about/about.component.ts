import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
	users: User[];

  constructor(private userService: UserService){}
	
  ngOnInit(){
    this.userService.getUsers()
      .then(users => this.users = users);
  }
}
