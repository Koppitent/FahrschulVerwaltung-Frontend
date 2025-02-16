import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fahrlehrer } from '../../interfaces/fahrlehrer.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fahrlehrer-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fahrlehrer-edit.component.html',
  styleUrl: './fahrlehrer-edit.component.css'
})
export class FahrlehrerEditComponent {
	@Input({required: true}) fahrlehrer: Fahrlehrer | null = null;
	@Output() close = new EventEmitter<void>();
	@Output() save = new EventEmitter<Fahrlehrer>();
	
	onSave() {
		if (this.fahrlehrer) {
      this.save.emit(this.fahrlehrer);
    }
	}

	onClose() {
		this.close.emit();
	}
}
