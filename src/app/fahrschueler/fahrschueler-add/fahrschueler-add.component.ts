import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fahrschueler } from '../../interfaces/fahrschueler.interface';
import { FahrschuelerService } from '../../services/fahrschueler.service';

@Component({
  selector: 'app-fahrschueler-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './fahrschueler-add.component.html',
  styleUrl: './fahrschueler-add.component.css',
})
export class FahrschuelerAddComponent {
  fahrschuelerForm: FormGroup;
  submitted = false;
  fahrschueler!: Fahrschueler;

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

  constructor(private fb: FormBuilder, private fsService: FahrschuelerService) {
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
    this.fahrschueler = {
      name: formData.name,
      vorname: formData.vorname,
      email: formData.email,
      phone: formData.phone,
      geburtsdatum: new Date(formData.geburtsdatum),
      klassen: formData.klassen || [],
      ort: formData.ort,
      strasse: formData.strasse,
    };
    console.log(this.fahrschueler);
    this.clearForm();
    this.fsService.createFahrschueler(this.fahrschueler).subscribe(
      (newFahrschueler) => {
        console.log('Created:', newFahrschueler);
        this.messageType = 'success';
        this.messageOut = 'Der Fahrschüler wurde erstellt!';
      },
      (error) => {
        console.error('Error:', error);
				this.messageType = 'error';
        this.messageOut = 'Der Fahrschüler konnte nicht erstellt werden.';
      }
    );
  }
}
