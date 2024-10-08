import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-diferencial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-diferencial.component.html',
  styleUrl: './card-diferencial.component.scss'
})
export class CardDiferencialComponent {
  @Input()
  titulo!: string;
  @Input()
  descricao!: string;
  @Input()
  icone!: string;
  @Input()
  active!: string;
}
