import { Component, OnInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../image';

@Component({
  selector: 'app-cases-slider',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cases-slider.component.html',
  styleUrls: ['./cases-slider.component.scss']
})
export class CasesSliderComponent implements OnInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  public images: Image[] = [
    new Image("../../../assets/images/cases/sinqia.webp", "Sinqia S/A", "Sinqia S/A", "#"),
    new Image("../../../assets/images/cases/IPSJ.png", "Igreja Presbiteriana da Silva Jardim", "Igreja Presbiteriana da Silva Jardim", "#"),
    new Image("../../../assets/images/cases/Sua-empresa-aqui.gif", "Sua Empresa Pode Estar Aqui", "Sua Empresa Pode Estar Aqui", "https://wa.me/5541985075085?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20de%20desenvolvimento%20de%20software%20para%20meu%20neg%C3%B3cio"),
    new Image("../../../assets/images/cases/o-cemiterio-veritcal-de-curitiba.webp", "Cemitério Vertical de Curitiba", "Cemitério Vertical de Curitiba", "#"),
    new Image("../../../assets/images/cases/psidrielly.png", "Psicóloga Drielly Uhlmann", "Psicóloga Drielly Uhlmann", "#"),
    new Image("../../../assets/images/cases/639App.png", "639 App", "639 App", "#"),
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
  }

  nextSlide(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  previousSlide(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
}
