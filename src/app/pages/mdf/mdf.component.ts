import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-mdf',
	templateUrl: './mdf.component.html',
	styleUrls: ['./mdf.component.scss']
})
export class MdfComponent implements OnInit {
	userForm: FormGroup;

	formErrors = {
		name: '',
		username: '',
		addresses: [
			{ city: '', country: '' }
		]
	};

	validationMessages = {
		name: {
			required: 'Name is required',
			minlength: 'Name must be at least 3 characters',
			maxlength: 'Name can\'t be more than 6 characters'
		},
		username: {
			required: 'Username is required'
		},
		addresses: {
			city: {
				required: 'City is required.',
				minlength: 'City must be 3 characters.'
			},
			country: {
				required: 'Country is required.'
			}
		}
	};

	constructor(private fb: FormBuilder) { }

	/**
	 * validate the addresses formarray
	 */
	validateAddresses() {
		// grab the addresses formarray
		let addresses = <FormArray>this.userForm.get('addresses');

		// clear the form errors
		this.formErrors.addresses = [];

		// loop through however many formgroups are in the formarray
		let n = 1;
		while (n <= addresses.length) {

			// add the clear errors back
			this.formErrors.addresses.push({ city: '', country: '' });

			// grab the specific group (address)
			let address = <FormGroup>addresses.at(n - 1);

			// validate that specific group. loop through the groups controls
			for (let field in address.controls) {
				// get the formcontrol
				let input = address.get(field);

				// do the validation and save errors to formerrors if necessary 
				if (input.invalid && input.dirty) {
					for (let error in input.errors) {
						this.formErrors.addresses[n - 1][field] = this.validationMessages.addresses[field][error];
					}
				}
			}

			n++;
		}
	}

	createAddress() {
		return this.fb.group({
			city: ['', Validators.minLength(3)],
			country: ['']
		});
	}
	
	validateForm() {
		for (let field in this.formErrors) {
			this.formErrors[field] = '';

			let input = this.userForm.get(field);

			if (input.dirty && input.invalid) {
				for (let error in input.errors) {
					this.formErrors[field] = this.validationMessages[field][error];
				}
			}
		}

		this.validateAddresses();
	}

	buildForm() {
		this.userForm = this.fb.group({
			name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
			username: [''],
			addresses: this.fb.array([
				this.createAddress()
			])
		});

		this.userForm.valueChanges
			.subscribe(res => this.validateForm());
	}

	addAddress() {
		let addresses = <FormArray>this.userForm.get('addresses');
		addresses.push(this.createAddress());
	}

	removeAddress(i) {
		let addresses = <FormArray>this.userForm.get('addresses');
		addresses.removeAt(i);
	}

	ngOnInit() {
		this.buildForm();
	}

	createUser() {
		console.log(this.userForm);
	}
}
