// src/app/shared/ui-components/card-service/card-service.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.scss'],
  standalone: true,
  imports: [CommonModule] // Importa CommonModule para diretivas como ngIf, ngFor, etc.
})
export class CardServiceComponent {
  @Input()
  titulo!: string;
  @Input()
  descricao!: string;
  @Input()
  icone!: string; // Classe do ícone do FontAwesome
  @Input()
  active!: string;
}
