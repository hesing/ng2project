import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private usersService: UsersService) { }

  clearMessages() {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 5000);
  }

  ngOnInit() {
    this.usersService.userCreated$.subscribe(user => {
      this.successMessage = `User ${user.name} successfully created`;
      this.clearMessages();
    });
    this.usersService.userDeleted$.subscribe(() => {
      this.errorMessage = `User successfully deleted`;
      this.clearMessages();
    });
  }

}
