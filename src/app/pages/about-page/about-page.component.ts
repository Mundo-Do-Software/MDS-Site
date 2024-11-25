import { Component } from '@angular/core';
import { BannerPageComponent } from "../../shared/ui-components/banner-page/banner-page.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { DarkGrayBackgroundComponent } from "../../shared/ui-components/dark-gray-background/dark-gray-background.component";
import { CardListComponent } from "../../shared/ui-components/card-list/card-list.component";
import { CardListValuesComponent } from "../../shared/ui-components/card-list-values/card-list-values.component";
import { SectionTitleCenterComponent } from "../../shared/ui-components/section-title-center/section-title-center.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [BannerPageComponent, BlackBackgroundComponent, SectionTitleComponent, DarkGrayBackgroundComponent, CardListComponent, CardListValuesComponent, SectionTitleCenterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  cardsValuesData = [
    {
      icon: 'gtn gtn-brain-light',
      title: 'Inovação',
      description: 'Acreditamos no poder transformador da tecnologia e estamos sempre em busca de novas ideias e ferramentas que possam trazer resultados diferenciados.',
    },
    {
      icon: 'gtn gtn-handshake-light',
      title: 'Compromisso com o Cliente',
      description: 'A satisfação dos nossos clientes está no centro de tudo o que fazemos. Trabalhamos lado a lado para garantir que as soluções atendam às suas expectativas e necessidades.',
    },
    {
      icon: 'gtn gtn-diamond-light',
      title: 'Excelência Técnica',
      description: 'Entregamos qualidade em cada linha de código, com foco em performance, segurança e escalabilidade.',
    },
    {
      icon: 'gtn gtn-eye-line',
      title: 'Transparência',
      description: 'Valorizamos uma comunicação clara e honesta com nossos clientes e parceiros, desde o planejamento até a entrega do projeto.',
    },
    {
      icon: 'gtn gtn-speed-light',
      title: 'Crescimento Contínuo',
      description: 'Buscamos sempre melhorar, investindo no desenvolvimento de nossa equipe e na qualidade de nossas soluções.',
    },
  ];
  cardsDiferencialData = [
    {
      icon: 'gtn gtn-pencil-ruler-solid',
      title: 'Soluções Sob Medida',
      description: 'Não trabalhamos com soluções genéricas. Cada projeto é pensado e desenvolvido para resolver as necessidades específicas de cada cliente.'
    },
    {
      icon: 'gtn gtn-cloud-1-light',
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as tecnologias mais avançadas do mercado, como .NET, Angular, Flutter, e outras, para garantir que nossos sistemas sejam seguros, eficientes e escaláveis.'
    },
    {
      icon: 'gtn gtn-brain-light',
      title: 'Experiência Multissetorial',
      description: 'Trabalhamos com clientes de diferentes setores, o que nos dá uma visão ampla de como a tecnologia pode ser aplicada para resolver desafios variados.'
    },
    {
      icon: 'gtn gtn-hands-helping-solid',
      title: 'Suporte e Acompanhamento',
      description: 'Não terminamos nosso trabalho na entrega do projeto. Oferecemos suporte contínuo e ajudamos nossos clientes a evoluírem suas soluções conforme suas empresas crescem.'
    },
  ];
}
