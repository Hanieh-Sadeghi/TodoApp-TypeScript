import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiComponent } from '../li/li.component';

interface Tasks {
  todo: string;
  status: boolean;
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
  @Output() ulEvent = new EventEmitter<string>();


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
    this.ulEvent.emit('1');
  }

  editTaskEvent(task: string) {
    this.ulEvent.emit('2');
  }

  deleteTaskEvent(task: string) {
    this.ulEvent.emit('3');
  }
}
