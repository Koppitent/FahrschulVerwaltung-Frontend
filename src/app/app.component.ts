import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FahrschuelerOverviewComponent } from "./fahrschueler-overview/fahrschueler-overview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FahrschuelerOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fahrschulverwaltung';
}
