import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-li',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './li.component.html',
  styles: [
    '@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"',
  ],
  styleUrl: './li.component.css',
})
export class LiComponent {}
