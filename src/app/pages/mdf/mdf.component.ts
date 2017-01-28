import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

	validateForm() {
		this.nameError = '';
		this.usernameError = '';
		let name = this.userForm.get('name');
		let username = this.userForm.get('username');

		if (name.dirty && name.invalid) {
			if (name.errors['required']) this.nameError = 'Name is required.';
			if (name.errors['minlength']) this.nameError = 'Name must be at least 3 characters.';
			if (name.errors['maxlength']) this.nameError = 'Name can\'t be more than 6 characters.';
		}

		if (username.dirty && username.invalid) {
			this.usernameError = 'Username is required';
		}
	}

	buildForm() {
		this.userForm = this.fb.group({
			name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
			username: ['']
		});

		this.userForm.valueChanges
			.subscribe(res => this.validateForm());
	}

	ngOnInit() {
		this.buildForm();
	}

	createUser() {
		console.log(this.userForm.value);
	}
}
