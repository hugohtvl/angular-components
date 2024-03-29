import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'block-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css',
})
export class BlockComponent {
  title = 'blockApplication';
}
