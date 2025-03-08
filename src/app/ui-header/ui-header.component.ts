import { Component, EventEmitter, Output } from '@angular/core';
import { UiDashboardComponent } from "../ui-dashboard/ui-dashboard.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.css',
})
export class UiHeaderComponent {
	@Output() triggerVisibility = new EventEmitter<void>();

  changeDashVisibility() {
		this.triggerVisibility.emit();
	}

}
