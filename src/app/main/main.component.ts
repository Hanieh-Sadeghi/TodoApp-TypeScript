import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlComponent } from '../ul/ul.component';
import { ButtonsComponent } from '../buttons/buttons.component';

interface TodoEvent {
  event: string;
  value: boolean;
  task: string;
}

interface MainTodoEvent {
  event: string;
  eventValue: boolean;
  value: string;
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
  @Output() mainEvent = new EventEmitter<MainTodoEvent>();

  ulComponent(e: TodoEvent) {
    let event: MainTodoEvent = {
      event: e.event,
      eventValue: e.value,
      value: 'none',
      task: e.task,
    };

    this.mainEvent.emit(event);
  }

  buttonsComponent(value: string) {
    let event: MainTodoEvent = {
      event: 'buttons',
      eventValue: true,
      value: value,
      task: 'None',
    };

    this.mainEvent.emit(event);
  }
}
