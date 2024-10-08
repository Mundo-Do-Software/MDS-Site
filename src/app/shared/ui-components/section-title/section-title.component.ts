import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input()
  title!: string;
  @Input() subtitle?: string;
}
