import { Component } from '@angular/core';
import { UiDashboardComponent } from "../ui-dashboard/ui-dashboard.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-header',
  standalone: true,
  imports: [UiDashboardComponent, RouterLink],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.css',
})
export class UiHeaderComponent {
  dashVisibility = false;
  changeDashVisibility() {
		this.dashVisibility = !this.dashVisibility;
	}

}
