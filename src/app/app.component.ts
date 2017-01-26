import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router, private authService: AuthService){}

  get isLoggedIn(){
  	return this.authService.isLoggedIn();
  }

  logout(event){
  	event.preventDefault();
	this.authService.logout();
	this.router.navigate(['/login']);
  }
}
