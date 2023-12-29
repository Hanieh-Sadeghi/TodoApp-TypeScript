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
  // @Output() activeButtonEvent = new EventEmitter<string> ();
  // @Output() completeButtonEvent = new EventEmitter<string> ();
  // @Output() signUpButtonEvent = new EventEmitter<string> ();
  // @Output() loginButtonEvent = new EventEmitter<string> ();

  buttons(value : string){
    console.log(value)
    this.buttonsEvent.emit(value)
  }
}
