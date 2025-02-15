import { Component, OnInit } from '@angular/core';
import { FahrschuelerService } from '../services/fahrschueler.service';
import { Fahrschueler } from '../interfaces/fahrschueler.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fahrschueler-overview',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fahrschueler-overview.component.html',
  styleUrl: './fahrschueler-overview.component.css',
})
export class FahrschuelerOverviewComponent implements OnInit {
  fahrschuelerList: Fahrschueler[] = [];

  constructor(private fahrschuelerService: FahrschuelerService) {}

  geburtVisible = false;
  ortVisible = false;
  emailVisible = true;
  phoneVisible = true;
  idVisible = false;

  changeGeburtVisible(event: Event) {
    const check = (event.target as HTMLInputElement).checked;
    this.geburtVisible = check;
  }
  changeOrtVisible(event: Event) {
    const check = (event.target as HTMLInputElement).checked;
    this.ortVisible = check;
  }
  changeIdVisible(event: Event) {
    const check = (event.target as HTMLInputElement).checked;
    this.idVisible = check;
  }
  changeEmailVisible(event: Event) {
    const check = (event.target as HTMLInputElement).checked;
    this.emailVisible = check;
  }
  changePhoneVisible(event: Event) {
    const check = (event.target as HTMLInputElement).checked;
    this.phoneVisible = check;
  }

  resetFilters() {
    this.geburtVisible = false;
    this.ortVisible = false;
    this.emailVisible = true;
    this.phoneVisible = true;
    this.idVisible = false;
  }

  dropdownOpen = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  ngOnInit(): void {
    this.loadFahrschueler();
  }

  changeVisibilityGeburt(check: boolean) {}

  changeVisibilityOrt(check: boolean) {}

  loadFahrschueler(): void {
    this.fahrschuelerService.getFahrschueler().subscribe((data) => {
      this.fahrschuelerList = data;
    });
  }

  clickButton() {
    const dummyFahrschueler: Fahrschueler = {
      name: 'Mustermann',
      vorname: 'Max',
      email: 'max@example.com',
      phone: '016332476234',
      geburtsdatum: new Date(1995, 6, 20), // Ensure correct format
      klassen: ['B', 'A1'],
      ort: 'Sulzbach',
      strasse: 'Hofstr. 14',
    };

    this.fahrschuelerService.createFahrschueler(dummyFahrschueler).subscribe(
      (newFahrschueler) => {
        console.log('Created:', newFahrschueler);
        this.fahrschuelerList.push(newFahrschueler);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteFahrschueler(id: number) {
    this.fahrschuelerService.deleteFahrschueler(id).subscribe(
      () => {
        console.log('Deleted Fahrschüler:', id);
        this.fahrschuelerList = this.fahrschuelerList.filter(
          (f) => f.id !== id
        );
      },
      (error) => {
        console.error('Error deleting Fahrschüler:', error);
      }
    );
  }
}
