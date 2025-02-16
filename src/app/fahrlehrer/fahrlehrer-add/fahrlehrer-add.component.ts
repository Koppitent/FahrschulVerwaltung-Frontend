import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FahrlehrerService } from '../../services/fahrlehrer.service';
import { Fahrlehrer } from '../../interfaces/fahrlehrer.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fahrlehrer-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fahrlehrer-add.component.html',
  styleUrl: './fahrlehrer-add.component.css'
})
export class FahrlehrerAddComponent {
fahrschuelerForm: FormGroup;
	submitted = false;
	fahrlehrer!: Fahrlehrer;

	klassenOptions = [
		'A',
		'A2',
		'A1',
		'AM',
		'B',
		'B17',
		'B197',
		'B96',
		'B196',
		'BE',
		'C1',
		'C1E',
		'C',
		'CE',
		'D1',
		'D1E',
		'D',
		'DE',
		'L',
		'T',
	];

	constructor(private fb: FormBuilder, private flService: FahrlehrerService) {
		this.fahrschuelerForm = this.fb.group({
			name: ['', Validators.required],
			vorname: ['', Validators.required],
			email: ['', Validators.required],
			phone: [''],
			geburtsdatum: ['', Validators.required],
			klassen: this.fb.array([]),
			ort: ['', Validators.required],
			strasse: ['', Validators.required],
		});
	}

	onKlasseChange(event: any, index: number) {
		const klassenArray = this.fahrschuelerForm.get('klassen') as FormArray;
		if (event.target.checked) {
			klassenArray.push(this.fb.control(this.klassenOptions[index]));
		} else {
			const indexToRemove = klassenArray.value.indexOf(
				this.klassenOptions[index]
			);
			klassenArray.removeAt(indexToRemove);
		}
	}

	clearForm() {
		this.fahrschuelerForm.reset();
		this.submitted = false;
	}

	messageOut: string | null = null;
	messageType = '';
	onSubmit() {
		if(!this.fahrschuelerForm.valid) {
			this.messageType = 'error';
			this.messageOut = 'Deine Angaben sind nicht valide.';
			this.submitted = true;
			return;
		}
		this.submitted = true;
		const formData = this.fahrschuelerForm.value;
		this.fahrlehrer = {
			name: formData.name,
			vorname: formData.vorname,
			email: formData.email,
			phone: formData.phone,
			geburtsdatum: new Date(formData.geburtsdatum),
			klassen: formData.klassen || [],
			ort: formData.ort,
			strasse: formData.strasse,
		};
		console.log(this.fahrlehrer);
		this.clearForm();
		this.flService.createFahrlehrer(this.fahrlehrer).subscribe(
			(newFahrschueler) => {
				console.log('Created:', newFahrschueler);
				this.messageType = 'success';
				this.messageOut = 'Der Fahrlehrer wurde erstellt!';
			},
			(error) => {
				console.error('Error:', error);
				this.messageType = 'error';
				this.messageOut = 'Der Fahrschüler konnte nicht erstellt werden.';
			}
		);
	}
}
