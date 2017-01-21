import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';

@Component({
  template: `
<h2>User Detail</h2>
<pre>
{{ user | json }}
</pre> 
<div class="form-group">
  <input type="text" [(ngModel)]="editName" class="form-control">
</div>
<div class="form-group text-center">
  <a routerLink="/dashboard/users" class="btn btn-danger">Cancel</a>
  <button (click)="save()" class="btn btn-success">Save</button>
</div>
  `
})
export class DashboardUserDetailComponent implements OnInit {
  user: User;
  editName: string;

  constructor(private route: ActivatedRoute, 
  				private router: Router,
  				private userService: UserService) { }

  ngOnInit() {
  	this.route.params.subscribe(res => {
  		this.userService.getUser(res['username'])
  			.then(user => {
  				this.user = user;
  				this.editName = user.name;
  			});
  	});
  }

  save(){
  	this.user.name = this.editName;
  	this.router.navigate(['/dashboard/users']);
  }

  canDeactivate() {
    console.log('i am navigating away');

    if (this.user.name !== this.editName) {
      return window.confirm('Discard changes?');
    }

    return true;
  }

}
