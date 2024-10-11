import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list-values.component.html',
  styleUrl: './card-list-values.component.scss'
})
export class CardListValuesComponent {
  @Input() cards: Array<{ icon: string, title: string, description: string}> = [];
}
