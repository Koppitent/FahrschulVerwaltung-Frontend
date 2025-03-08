import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FahrschuelerOverviewComponent } from "./fahrschueler/fahrschueler-overview/fahrschueler-overview.component";
import { UiHeaderComponent } from "./ui-header/ui-header.component";
import { UiDashboardComponent } from "./ui-dashboard/ui-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UiHeaderComponent,
    UiDashboardComponent,
    UiDashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fahrschulverwaltung';
  dashVisibility: boolean = false;
	changeVisibility() {
		this.dashVisibility = !this.dashVisibility;
	}
}
