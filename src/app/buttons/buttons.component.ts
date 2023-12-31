import { Component , Input , Output , EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Output() buttonsEvent = new EventEmitter<string> ();

  buttons(value : string){
    this.buttonsEvent.emit(value)
  }
}
