import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fahrschueler } from '../../interfaces/fahrschueler.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fahrschueler-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fahrschueler-edit.component.html',
  styleUrl: './fahrschueler-edit.component.css',
})
export class FahrschuelerEditComponent {
  @Input({required: true}) fahrschueler: Fahrschueler | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Fahrschueler>();

  onSave() {
    if (this.fahrschueler) {
      this.save.emit(this.fahrschueler);
    }
  }

  onClose() {
    this.close.emit();
  }
}
