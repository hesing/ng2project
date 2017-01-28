import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss']
})
export class MdfComponent implements OnInit {
  userForm: FormGroup;
  nameError: string = '';
  usernameError: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  	this.userForm = this.fb.group({
  		name: [''],
  		username: ['']
  	});

  	this.userForm.valueChanges
  		.subscribe(res => {
  			this.nameError = '';
  			this.usernameError = '';

  			let name = this.userForm.get('name');
  			let username = this.userForm.get('username');

  			if(name.dirty && name.invalid){
  				this.nameError = 'Name is required';
  			}

  			if(username.dirty && username.invalid){
  				this.usernameError = 'Username is required';
  			}

  		});
  }

  createUser(){
  	console.log(this.userForm.value);
  }
}
