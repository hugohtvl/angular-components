import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './components/block/block.component';
import { userProfileComponent } from './components/user-profile/user-profile.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BlockComponent,
    userProfileComponent,
    ButtonsComponent,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'blockApplication';
}
