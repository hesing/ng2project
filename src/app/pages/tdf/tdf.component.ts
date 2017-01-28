import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  user: User = {
    name: '',
    username: ''  
  };
  
  constructor() { }

  ngOnInit() {
  }

  createUser(){
  	console.log(this.user);
  }
}
