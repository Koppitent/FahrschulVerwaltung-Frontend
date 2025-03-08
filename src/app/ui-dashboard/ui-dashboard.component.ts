import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Dashboard } from '../interfaces/dashboard.interface';

@Component({
  selector: 'app-ui-dashboard',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './ui-dashboard.component.html',
  styleUrl: './ui-dashboard.component.css',
  animations: [
    trigger('dropdownAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(-10%)',
          opacity: 0,
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
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class UiDashboardComponent {
  @Input({ required: true }) isVisible = false;

  dashboard: Dashboard = {
    buttons: [
      {
        label: 'Fahrschüler',
        items: [
          {
            label: 'Fahrschüler anzeigen',
            routerLink: '/fahrschueler',
          },
          {
            label: 'Fahrschüler erstellen',
            routerLink: '/fahrschueler/erstellen',
          },
        ],
      },
      {
        label: 'Fahrlehrer',
        items: [
          {
            label: 'Fahrlehrer anzeigen',
            routerLink: '/fahrlehrer',
          },
          {
            label: 'Fahrlehrer erstellen',
            routerLink: '/fahrlehrer/erstellen',
          },
        ],
      },
      {
        label: 'Praxisstunden erstellen',
        routerLink: '/praxisstunden-erstellen',
      },
    ],
  };

	activeItem: string | null = null;
  activeButton: string | null = null;
  toggleExpand(label: string) {
    this.activeButton = this.activeButton === label ? null : label;
		this.activeItem = this.activeButton;
  }
	
	toggleActiveItem(label: string) {
		this.activeItem = label;
	}

  close() {
    this.isVisible = false;
  }

}
