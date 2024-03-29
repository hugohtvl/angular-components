import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
}

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class userProfileComponent {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  isAgeDisplay: boolean = true;

  toggleAgeDisplay() {
    this.isAgeDisplay = !this.isAgeDisplay;
  }
}
