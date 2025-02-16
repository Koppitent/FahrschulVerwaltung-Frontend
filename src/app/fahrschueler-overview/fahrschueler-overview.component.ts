import { Component, OnInit } from '@angular/core';
import { FahrschuelerService } from '../services/fahrschueler.service';
import { Fahrschueler } from '../interfaces/fahrschueler.interface';
import { FormsModule } from '@angular/forms';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { FahrschuelerEditComponent } from "../fahrschueler-edit/fahrschueler-edit.component";

@Component({
  selector: 'app-fahrschueler-overview',
  standalone: true,
  imports: [FormsModule, FahrschuelerEditComponent],
  templateUrl: './fahrschueler-overview.component.html',
  styleUrl: './fahrschueler-overview.component.css',
  animations: [
    trigger('dropdownAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(0)',
          opacity: 1,
          height: 0,
          overflow: 'hidden',
        })
      ),
      state(
        '*',
        style({
          transform: 'translateY(0)',
          opacity: 1,
          height: '*',
          overflow: 'hidden',
        })
      ),
      transition('void <=> *', animate('400ms ease-in-out')),
    ]),
  ],
})
export class FahrschuelerOverviewComponent implements OnInit {
  fahrschuelerList: Fahrschueler[] = [];
  filteredFahrschuelerList: Fahrschueler[] = [];
  searchTerm: string = '';

  constructor(private fahrschuelerService: FahrschuelerService) {}

  geburtVisible = false;
  ortVisible = false;
  emailVisible = true;
  phoneVisible = true;
  idVisible = false;
  currentFahrschueler: Fahrschueler | null = null;

  editFahrschueler(fs: Fahrschueler){
		this.currentFahrschueler = fs;
	}

	saveEditedFahrschueler(fs: Fahrschueler) {
		this.fahrschuelerService.updateFahrschueler(fs).subscribe({
      next: (updatedFahrschueler) => {
        console.log('Update successful:', updatedFahrschueler);
      },
      error: (error) => {
        console.error('Update failed:', error);
      },
      complete: () => {
        console.log('Update request completed.');
      },
    });
		this.closeEditFahrschueler();
	}

	closeEditFahrschueler() {
		this.currentFahrschueler = null;
	}

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
  fDD = '⏷';
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.fDD = '⏶';
    } else {
      this.fDD = '⏷';
    }
  }

  filterFahrschueler() {
    this.filteredFahrschuelerList = this.fahrschuelerList.filter((schueler) =>
      (schueler.vorname + ' ' + schueler.name)
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.loadFahrschueler();
  }

  changeVisibilityGeburt(check: boolean) {}

  changeVisibilityOrt(check: boolean) {}

  loadFahrschueler(): void {
    this.fahrschuelerService.getFahrschueler().subscribe((data) => {
      this.fahrschuelerList = data;
      this.filterFahrschueler();
    });
  }

  addDummy() {
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
				this.filterFahrschueler();
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
				this.filterFahrschueler();
      },
      (error) => {
        console.error('Error deleting Fahrschüler:', error);
      }
    );
  }
}
