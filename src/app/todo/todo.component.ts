import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HederComponent } from '../heder/heder.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';

interface MainTodoEvent {
  event: string;
  eventValue: boolean;
  value: string;
  task: string;
}
@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  imports: [CommonModule, HederComponent, MainComponent, FooterComponent],
})
export class TodoComponent {
  
  mianComponet(event: MainTodoEvent) {
    console.log('from parent');
    console.log(event)
  }
  showTodo(todo: MainTodoEvent) {

    console.log(todo);
  }

}
