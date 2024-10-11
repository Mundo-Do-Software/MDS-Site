import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-overlay-background',
  standalone: true,
  imports: [],
  templateUrl: './image-overlay-background.component.html',
  styleUrl: './image-overlay-background.component.scss'
})
export class ImageOverlayBackgroundComponent {
  @Input() backgroundUrl: string = '';
}
