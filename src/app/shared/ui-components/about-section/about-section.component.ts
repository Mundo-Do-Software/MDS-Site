import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent  {
  // Galeria de imagens com textos
  public galleryItems = [
    {
      image: '../../../assets/images/gallery/Site-Image-1.png',
      title: 'Nosso Time',
      description: 'Nosso time é composto por empreendedores e profissionais altamente capacitados...'
    },
    {
      image: '../../../assets/images/gallery/Filosofia.png',
      title: 'Filosofia',
      description: 'Transformamos ideias em soluções digitais que impulsionam negócios...'
    },
    {
      image: '../../../assets/images/gallery/Site-Image.png',
      title: 'Sobre Escritório',
      description: 'Somos uma empresa 100% digital, com estrutura remota que permite agilidade...'
    }
  ];
}