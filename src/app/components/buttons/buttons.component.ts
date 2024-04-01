import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'buttons-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  title = 'Bonjour !';
  isAdmin: boolean = true;

  toggleisAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
