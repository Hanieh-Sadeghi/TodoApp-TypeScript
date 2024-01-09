import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlComponent } from '../ul/ul.component';
import { ButtonsComponent } from '../buttons/buttons.component';

interface TodoEvent {
  event: string;
  value: boolean;
  task: string;
}
@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [CommonModule, UlComponent, ButtonsComponent],
})
export class MainComponent {
  @Output() mainEvent = new EventEmitter<string>();

  ulComponent(event: TodoEvent) {
    console.log(event);
    this.mainEvent.emit('ulComponent');
  }

  buttonsComponent(event: string) {
    console.log(event);
    this.mainEvent.emit('buttonsComponent');
  }
}
