import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Praxisstunde } from '../../interfaces/praxisstunde.class';
import { Fahrlehrer } from '../../interfaces/fahrlehrer.interface';
import { Fahrschueler } from '../../interfaces/fahrschueler.interface';
import { FahrschuelerService } from '../../services/fahrschueler.service';
import { FahrlehrerService } from '../../services/fahrlehrer.service';
import { PraxisstundenService } from '../../services/praxisstunden.service';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
} from '@ng-select/ng-select';

@Component({
  selector: 'app-praxisstunde-create',
  standalone: true,
  imports: [FormsModule, NgSelectComponent, NgLabelTemplateDirective, NgOptionTemplateDirective],
  templateUrl: './praxisstunde-create.component.html',
  styleUrl: './praxisstunde-create.component.css',
})
export class PraxisstundeCreateComponent implements OnInit {
  praxisstunde: Praxisstunde = new Praxisstunde();
  datum: string = '';
  uhrzeit: string = '';

  fahrschuelerList: Fahrschueler[] = [];
  fahrlehrerList: Fahrlehrer[] = [];

  constructor(
    private fs: FahrschuelerService,
    private fl: FahrlehrerService,
    private ps: PraxisstundenService
  ) {}

  ngOnInit() {
    this.fs.getFahrschueler().subscribe((data: Fahrschueler[]) => {
      this.fahrschuelerList = data.map((f) => ({
        ...f,
        fullName: `${f.vorname} ${f.name}`,
      }));
    });
    this.fl.getFahrlehrer().subscribe((data: Fahrlehrer[]) => {
      this.fahrlehrerList = data.map((f) => ({
        ...f,
        fullName: `${f.vorname} ${f.name}`,
      }));
    });
  }

  onSubmit() {
    this.praxisstunde.setDatumAndUhrzeit(this.datum, this.uhrzeit);
    console.log(this.praxisstunde);
    this.ps
      .postPraxisstunde(this.praxisstunde)
      .subscribe((data: Praxisstunde) => {
        this.praxisstunde = new Praxisstunde();
        console.log(data);
      });
  }
}
