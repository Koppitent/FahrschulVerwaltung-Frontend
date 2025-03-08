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

  private options: Map<string, boolean>;
  constructor() {
    this.options = new Map();
    this.options.set('fahrschuler', false);
    this.options.set('fahrlehrer', false);
  }

  setOptionActive(option: string): void {
    if (this.options.has(option)) {
      const isCurrentlyActive = this.options.get(option);
      if (isCurrentlyActive) {
        this.options.set(option, false);
      } else {
        this.options.forEach((_, key) => {
          this.options.set(key, key === option);
        });
      }
    } else {
      console.warn(`Option "${option}" does not exist.`);
    }
  }

  close() {
    this.isVisible = false;
  }

  getOption(key: string): boolean {
    return this.options.get(key) || false;
  }

  toggleExpandFahrschueler() {
    this.setOptionActive('fahrschuler');
  }

  toggleExpandFahrlehrer() {
    this.setOptionActive('fahrlehrer');
  }
}
