import { Component, Input, OnInit } from '@angular/core';
import { Praxisstunde } from '../../interfaces/praxisstunde.interface';
import { DatePipe } from '@angular/common';
import { FahrlehrerService } from '../../services/fahrlehrer.service';
import { FahrschuelerService } from '../../services/fahrschueler.service';
import { Fahrschueler } from '../../interfaces/fahrschueler.interface';
import { Fahrlehrer } from '../../interfaces/fahrlehrer.interface';

@Component({
  selector: 'app-praxisstunde-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './praxisstunde-card.component.html',
  styleUrl: './praxisstunde-card.component.css'
})
export class PraxisstundeCardComponent implements OnInit {
	@Input({required: true}) praxis?: Praxisstunde;

	constructor(private fs: FahrschuelerService, private fl: FahrlehrerService) {}

	showFahrlehrer: boolean = true;
	showFahrschueler: boolean = false;

	fahrschueler: Fahrschueler = {};
	fahrlehrer: Fahrlehrer = {};
	ngOnInit(): void {
		if(this.showFahrlehrer) {
			this.fl.getFahrlehrerById(this.praxis?.fahrlehrerId!).subscribe((data) => {
				this.fahrlehrer = data;
			});
		}
		if(this.showFahrschueler) {
			this.fs.getFahrschuelerById(this.praxis?.fahrschuelerId!).subscribe((data) => {
				this.fahrschueler = data;
			});
		}
	}

}
