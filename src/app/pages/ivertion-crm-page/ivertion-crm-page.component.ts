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
  cardsWorkflowData = [
    {
      icon: 'gtn gtn-email-light',
      title: 'Follow-ups Automáticos',
      description: 'Configure lembretes e envios automáticos de e-mails para leads e clientes.',
    },
    {
      icon: 'gtn gtn-robot-solid',
      title: 'Atualizações Automáticas',
      description: 'Avalie e qualifique seus leads automaticamente com base em critérios personalizáveis.',
    },
    {
      icon: 'gtn gtn-team-2-line',
      title: 'Distribuição de Leads',
      description: 'Automatize a distribuição de leads entre os membros da equipe, com base na carga de trabalho ou na especialidade de cada um.',
    },
  ];
}
