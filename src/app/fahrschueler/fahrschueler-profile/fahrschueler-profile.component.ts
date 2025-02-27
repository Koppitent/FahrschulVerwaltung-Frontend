import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Fahrschueler } from '../../interfaces/fahrschueler.interface';
import { PraxisstundenService } from '../../services/praxisstunden.service';
import { Praxisstunde } from '../../interfaces/praxisstunde.interface';
import { PraxisstundeCardComponent } from '../../praxisstunden/praxisstunde-card/praxisstunde-card.component';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-fahrschueler-profile',
  standalone: true,
  imports: [PraxisstundeCardComponent, NgIf, DatePipe, NgFor],
  templateUrl: './fahrschueler-profile.component.html',
  styleUrl: './fahrschueler-profile.component.css',
})
export class FahrschuelerProfileComponent implements OnInit {
  @Input({ required: true }) fahrschueler?: Fahrschueler;
  @Output() modalCloseClicked = new EventEmitter<void>();

  praxisstundenList: Praxisstunde[] = [];
  constructor(private praxisService: PraxisstundenService) {}

  selectedTab: 'praxis' | 'theorie' | 'profil' = 'praxis';
  @ViewChild('praxisContainer', { static: false }) praxisContainer!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    if (this.praxisContainer) {
      this.praxisContainer.nativeElement.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  }

  scrollRight() {
    if (this.praxisContainer) {
      this.praxisContainer.nativeElement.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  }

  ngOnInit(): void {
    this.praxisService
      .getPraxisstundenFahrschueler(this.fahrschueler?.id!)
      .subscribe((data) => {
        this.praxisstundenList = data;
      });
  }

  closeModal() {
    this.modalCloseClicked.emit();
  }
}
