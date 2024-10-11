import { Component } from '@angular/core';
import { BannerPageComponent } from "../../shared/ui-components/banner-page/banner-page.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { DarkGrayBackgroundComponent } from "../../shared/ui-components/dark-gray-background/dark-gray-background.component";
import { CardListValuesComponent } from "../../shared/ui-components/card-list-values/card-list-values.component";
import { CardServiceComponent } from "../../shared/ui-components/card-service/card-service.component";
import { CardDiferencialComponent } from "../../shared/ui-components/card-diferencial/card-diferencial.component";

@Component({
  selector: 'app-ivertion-crm-page',
  standalone: true,
  imports: [BannerPageComponent, BlackBackgroundComponent, SectionTitleComponent, DarkGrayBackgroundComponent, CardListValuesComponent, CardServiceComponent, CardDiferencialComponent],
  templateUrl: './ivertion-crm-page.component.html',
  styleUrl: './ivertion-crm-page.component.scss'
})
export class IvertionCrmPageComponent {
  cardsLeadsData = [
    {
      icon: 'gtn gtn-sms-solid',
      title: 'Captação de Leads',
      description: 'Importe leads de diferentes fontes, como e-mail, formulários de contato ou redes sociais.',
    },
    {
      icon: 'gtn gtn-star-half-alt-solid',
      title: 'Classificação de Leads',
      description: 'Avalie e qualifique seus leads automaticamente com base em critérios personalizáveis.',
    },
    {
      icon: 'gtn gtn-funnel-dollar-solid',
      title: 'Acompanhamento de Interações',
      description: 'Registre cada interação com o lead, como e-mails, telefonemas ou reuniões, para que você saiba exatamente em que ponto do funil ele está.',
    },
  ];
}
