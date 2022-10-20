import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	constructor(private fb: FormBuilder, private contact: EmailService) {}

	form: FormGroup;
	showMessage: boolean = false;
	isLoading: boolean = false;
	responseMessage: string;

	ngOnInit(): void {
		this.form = this.fb.group({
			name: [
				'',
				Validators.compose([
					Validators.minLength(3),
					Validators.required,
				]),
			],
			email: [
				'',
				Validators.compose([Validators.email, Validators.required]),
			],
			phone: [
				'',
				Validators.compose([
					Validators.minLength(15),
					Validators.maxLength(15),
					Validators.required,
				]),
			],
			message: [
				'',
				Validators.compose([
					Validators.minLength(5),
					Validators.required,
				]),
			],
		});
	}

	onSubmit() {
		if (this.form.valid) {
			this.form.disable();
			let data = this.form.getRawValue();
			this.isLoading = true;
			this.contact.sendEmail(data).subscribe(
				(res) => {
					this.form.enable();
					this.isLoading = false;
					location.href = 'https://mailthis.to/confirm';
				},
				(error) => {
					this.responseMessage =
						'Desculpe, algo deu errado. Atualize a página e tente novamente.';
					this.form.enable();
					this.showMessage = true;
					setTimeout(() => {
						this.showMessage = false;
					}, 2500);
					this.isLoading = false;
					console.log('error', error.message);
				}
			);
		} else {
			this.form.markAllAsTouched();
		}
	}

	validateNumbers(key) {
		let num = this.form.controls[key].value;
		if (num) {
			num = num.replace(/\D/g, '');
			if (!isNaN(num)) {
				num = num.charAt(0) == '0' ? num.substring(1) : num;
				if (num.length > 4) {
					num =
						num.substring(0, num.length - 4) +
						'-' +
						num.substring(num.length - 4, num.length);
				}
				if (num.length > 9) {
					num =
						num.substring(0, num.length - 10) +
						') ' +
						num.substring(num.length - 10, num.length);
				}
				if (num.length > 11) {
					num = '(' + num;
				}
				let int = parseInt(num);
			}

			this.form.controls[key].setValue(num);
		}
	}

	showAlert(key: string) {
		let isValid = this.form.controls[key].invalid;
		let isTouched = this.form.controls[key].touched;
		return (isValid && isTouched);
	}
}
