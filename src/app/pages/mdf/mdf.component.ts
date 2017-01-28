import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-mdf',
	templateUrl: './mdf.component.html',
	styleUrls: ['./mdf.component.scss']
})
export class MdfComponent implements OnInit {
	userForm: FormGroup;

	formErrors = {
		name: '',
		username: ''
	};

	validationMessages = {
		name: {
			required: 'Name is required',
			minlength: 'Name must be at least 3 characters',
			maxlength: 'Name can\'t be more than 6 characters'
		},
		username: {
			required: 'Username is required'
		}
	};

	constructor(private fb: FormBuilder) { }

	validateForm() {
		for(let field in this.formErrors){
			this.formErrors[field] = '';

			let input = this.userForm.get(field);

			if (input.dirty && input.invalid) {
				for (let error in input.errors) {
					this.formErrors[field] = this.validationMessages[field][error];
				}
			}
		}
	}

	buildForm() {
		this.userForm = this.fb.group({
			name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
			username: [''],
			addresses: this.fb.array([
					this.fb.group({
						city: [''],
						country: [''] 
					})
				])
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
