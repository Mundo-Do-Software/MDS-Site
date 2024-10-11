import { Component } from '@angular/core';
import { BannerPageComponent } from "../../shared/ui-components/banner-page/banner-page.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { DarkGrayBackgroundComponent } from "../../shared/ui-components/dark-gray-background/dark-gray-background.component";
import { CardListValuesComponent } from "../../shared/ui-components/card-list-values/card-list-values.component";
import { CardListComponent } from "../../shared/ui-components/card-list/card-list.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [BannerPageComponent, BlackBackgroundComponent, SectionTitleComponent, DarkGrayBackgroundComponent, CardListValuesComponent, CardListComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  cardsContactData = [
    {
      icon: 'fa fa-map-marker-alt',
      title: 'Endereço',
      description: 'Avenida Paulista, n° 1106, Sala 01, Andar 16, Bela Vista, São Paulo, SP, CEP: 01.310-914',
      buttonText: 'Encontre no Mapa',
      link: 'https://www.google.com/maps/search/Avenida+Paulista,+n%C2%B0+1106,+Sala+01,+Andar+16,+Bela+Vista,+S%C3%A3o+Paulo,+SP,+CEP:+01.310-914/@-23.5640346,-46.6525681,20z?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: 'fa fa-envelope', // Ícone da Font Awesome, ou outro que você preferir
      title: 'E-mail',
      description: 'contato@mundodosoftware.com.br',
      buttonText: 'Entre em contato',
      link: 'mailto:contato@mundodosoftware.com.br'
    },
    {
      icon: 'fa fa-phone',
      title: 'Telefone',
      description: '+55 (41) 9 8507-5085',
      buttonText: 'Fale pelo WhatsApp',
      link: 'https://wa.me/5541985075085'
    },
  ];
}
