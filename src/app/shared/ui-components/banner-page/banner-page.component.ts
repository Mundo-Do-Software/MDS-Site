import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-page',
  standalone: true,
  imports: [],
  templateUrl: './banner-page.component.html',
  styleUrl: './banner-page.component.scss'
})
export class BannerPageComponent {
  @Input() backgroundUrl: string = '';
  @Input() title: string = 'Default Title';
}
