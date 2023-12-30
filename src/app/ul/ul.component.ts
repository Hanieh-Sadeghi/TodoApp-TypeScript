import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiComponent } from '../li/li.component';

interface Tasks {
  todo: string;
  status: boolean;
}

interface TodoEvent {
  event: string;
  value: boolean;
  task: string;
}

@Component({
  selector: 'app-ul',
  standalone: true,
  templateUrl: './ul.component.html',
  styleUrl: './ul.component.css',
  imports: [CommonModule, LiComponent],
})
export class UlComponent {
  // @Output() ulEvent = new EventEmitter<boolean>();
  @Output() ulEvent = new EventEmitter<TodoEvent>();

  tasks: Tasks[] = [
    {
      todo: 'readibooks',
      status: true,
    },
    {
      todo: 'hanie',
      status: true,
    },
    {
      todo: 'hi',
      status: true,
    },
  ];

  checkBoxEvent(checked: boolean) {
    let event: TodoEvent = {
      event: 'checked',
      value: checked,
      task: 'test',
    };

    this.ulEvent.emit(event);
  }

  editTaskEvent(task: string) {
    let event: TodoEvent = {
      event: 'edit',
      value: true,
      task: task,
    };

    this.ulEvent.emit(event);
  }

  deleteTaskEvent(task: string) {
    let event: TodoEvent = {
      event: 'delete',
      value: true,
      task: task,
    };
    this.ulEvent.emit(event);
  }
}
