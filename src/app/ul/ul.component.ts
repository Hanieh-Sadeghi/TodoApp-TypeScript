import { Component } from '@angular/core';
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

  checkBoxEvent(check: boolean) {
    console.log('checkBoxEvent : From ul parent componet');
    console.log(check);
  }

  editTaskEvent(task: string) {
    console.log('editTaskEvent :From ul parent componet');
    console.log(task);
  }

  deleteTaskEvent(task: string) {
    console.log('deleteTaskEvent : From ul parent componet');
    console.log(task);
  }
}
