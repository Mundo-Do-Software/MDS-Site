import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title-center',
  standalone: true,
  imports: [],
  templateUrl: './section-title-center.component.html',
  styleUrl: './section-title-center.component.scss'
})
export class SectionTitleCenterComponent {
  @Input()
  title!: string;
  @Input() subtitle?: string;
}
