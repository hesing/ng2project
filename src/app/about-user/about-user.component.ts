import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {
  user;	
  constructor(private route: ActivatedRoute,
              private router: Router,  
              private userService: UserService) { }

  ngOnInit() {
  	let username = this.route.snapshot.params['username'];

  	this.userService.getUser(username)
                  .then(user => this.user = user );
  }

  goToContact(){
    // window.history.back();
    this.router.navigate(['/contact']);
  }

}
