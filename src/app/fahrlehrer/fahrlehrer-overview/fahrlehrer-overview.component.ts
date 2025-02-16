import { Component } from '@angular/core';
import { FahrlehrerService } from '../../services/fahrlehrer.service';
import { Fahrlehrer } from '../../interfaces/fahrlehrer.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { FahrlehrerEditComponent } from '../fahrlehrer-edit/fahrlehrer-edit.component';

@Component({
  selector: 'app-fahrlehrer-overview',
  standalone: true,
  imports: [FormsModule, FahrlehrerEditComponent],
  templateUrl: './fahrlehrer-overview.component.html',
  styleUrl: './fahrlehrer-overview.component.css',
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
export class FahrlehrerOverviewComponent {
  FahrlehrerList: Fahrlehrer[] = [];
  filteredFahrlehrerList: Fahrlehrer[] = [];
  searchTerm: string = '';

  constructor(private fahrlehrerService: FahrlehrerService) {}

  geburtVisible = false;
  ortVisible = false;
  emailVisible = true;
  phoneVisible = true;
  idVisible = false;
  currentFahrlehrer: Fahrlehrer | null = null;

  editFahrlehrer(fs: Fahrlehrer) {
    this.currentFahrlehrer = fs;
  }

  saveEditedFahrlehrer(fs: Fahrlehrer) {
    this.fahrlehrerService.updateFahrlehrer(fs).subscribe({
      next: (updatedFahrlehrer) => {
        console.log('Update successful:', updatedFahrlehrer);
      },
      error: (error) => {
        console.error('Update failed:', error);
      },
      complete: () => {
        console.log('Update request completed.');
      },
    });
    this.closeEditFahrlehrer();
  }

  closeEditFahrlehrer() {
    this.currentFahrlehrer = null;
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

  filterFahrlehrer() {
    this.filteredFahrlehrerList = this.FahrlehrerList.filter((schueler) =>
      (schueler.vorname + ' ' + schueler.name)
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.loadFahrlehrer();
  }

  changeVisibilityGeburt(check: boolean) {}

  changeVisibilityOrt(check: boolean) {}

  loadFahrlehrer(): void {
    this.fahrlehrerService.getFahrlehrer().subscribe((data) => {
      this.FahrlehrerList = data;
      this.filterFahrlehrer();
    });
  }

  addDummy() {
    const dummyFahrlehrer: Fahrlehrer = {
      name: 'Mustermann',
      vorname: 'Max',
      email: 'max@example.com',
      phone: '016332476234',
      geburtsdatum: new Date(1995, 6, 20), // Ensure correct format
      klassen: ['B', 'A1'],
      ort: 'Sulzbach',
      strasse: 'Hofstr. 14',
    };

    this.fahrlehrerService.createFahrlehrer(dummyFahrlehrer).subscribe(
      (newFahrlehrer) => {
        console.log('Created:', newFahrlehrer);
        this.FahrlehrerList.push(newFahrlehrer);
        this.filterFahrlehrer();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteFahrlehrer(id: number) {
    this.fahrlehrerService.deleteFahrlehrer(id).subscribe(
      () => {
        console.log('Deleted Fahrlehrer:', id);
        this.FahrlehrerList = this.FahrlehrerList.filter((f) => f.id !== id);
        this.filterFahrlehrer();
      },
      (error) => {
        console.error('Error deleting Fahrlehrer:', error);
      }
    );
  }
}
