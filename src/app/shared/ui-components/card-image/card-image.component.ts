import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss'
})
export class CardImageComponent {
  @Input() imageUrl!: string;
  @Input() imageAlt!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() isActive: boolean = false;
  @Input() modalContent: string[] = []; // Array de parágrafos para o modal

  isModalOpen: boolean = false;

  openModal(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
