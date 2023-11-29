import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiComponent } from "../li/li.component";

@Component({
    selector: 'app-ul',
    standalone: true,
    templateUrl: './ul.component.html',
    styleUrl: './ul.component.css',
    imports: [CommonModule, LiComponent]
})
export class UlComponent {

}
