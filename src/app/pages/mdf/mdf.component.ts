import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss']
})
export class MdfComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
  	this.userForm = new FormGroup({
  		name: new FormControl(''),
  		username: new FormControl('')
  	});
  }

  createUser(){
  	console.log(this.userForm.value);
  }
}
