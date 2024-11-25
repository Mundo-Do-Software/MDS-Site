import { Component } from '@angular/core';
import { BannerPageComponent } from "../../shared/ui-components/banner-page/banner-page.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { CardListComponent } from "../../shared/ui-components/card-list/card-list.component";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [BannerPageComponent, BlackBackgroundComponent, SectionTitleComponent, CardListComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  cardsData = [
    {
      icon: 'gtn gtn-Custom-api-light',
      title: 'iVertion (CRM e ERP)',
      description: 'O iVertion é a nossa solução carro-chefe, um sistema completo de CRM e ERP projetado para atender às necessidades de gestão de pequenas, médias e grandes empresas. Com módulos dedicados a CRM, gestão de vendas, controle de estoque, finanças e e-commerce, o iVertion oferece uma plataforma integrada que facilita a administração e o crescimento do seu negócio. O sistema é altamente personalizável, permitindo que as empresas adaptem suas funcionalidades de acordo com suas necessidades. Com versões web e mobile, o iVertion permite que você gerencie sua empresa de qualquer lugar, garantindo a eficiência e a organização dos seus processos. Também oferecemos um módulo de e-commerce completo, que pode ser integrado ao CRM, para otimizar as vendas e o atendimento ao cliente.',
      buttonText: 'Saiba Mais',
      link: 'https://wa.me/5541985075085'
    },
    {
      icon: 'gtn gtn-design-light', // Ícone da Font Awesome, ou outro que você preferir
      title: 'Desenvolvimento Web',
      description: 'Nossa equipe cria sistemas web robustos e eficientes utilizando as tecnologias mais avançadas como .NET, Angular e Node. Oferecemos soluções sob medida para automação de processos empresariais, portais de clientes, e-commerce e muito mais. Cada sistema é desenvolvido para garantir alta performance, segurança e uma experiência de usuário otimizada, seja qual for o tamanho do seu negócio. Trabalhamos com uma abordagem ágil para assegurar que o desenvolvimento atenda às mudanças e inovações constantes do mercado.',
      buttonText: 'Faça um Orçamento',
      link: 'https://wa.me/5541985075085'
    },
    {
      icon: 'gtn gtn-smartphone2-light',
      title: 'Desenvolvimento Mobile',
      description: 'No Mundo do Software, desenvolvemos aplicativos móveis para Android e iOS utilizando Flutter, uma das ferramentas mais poderosas para garantir alta performance e experiências consistentes em ambas as plataformas. Oferecemos soluções mobile sob medida, desde aplicativos corporativos até soluções voltadas para clientes, sempre com interfaces interativas e personalizadas. Nossos aplicativos são projetados para integrar-se perfeitamente com os sistemas web e ERP existentes, garantindo uma experiência de usuário uniforme e a otimização dos fluxos de trabalho internos e externos.',
      buttonText: 'Solicite uma Proposta',
      link: 'https://wa.me/5541985075085'
    },
    {
      icon: 'gtn gtn-cloud-light',
      title: 'Infraestrutura',
      description: 'Além de desenvolver soluções digitais, também cuidamos da infraestrutura necessária para que essas soluções operem com alta disponibilidade e segurança. Nossas soluções incluem configuração de servidores dedicados ou cloud, hospedagem, gerenciamento de redes, segurança de dados, backups automáticos e muito mais. Trabalhamos com as melhores práticas em segurança cibernética, garantindo que sua infraestrutura seja capaz de lidar com as demandas de crescimento e com o tráfego de usuários de forma eficiente. Nosso objetivo é garantir que as operações digitais dos nossos clientes funcionem de maneira fluida, escalável e segura.',
      buttonText: 'Conheça nosso serviço',
      link: 'https://wa.me/5541985075085'
    },
    {
      icon: 'gtn gtn-pencil-ruler-solid',
      title: 'Sistemas Customizados',
      description: 'No Mundo do Software, acreditamos que cada empresa é única e, por isso, oferecemos o desenvolvimento de sistemas customizados para atender às suas necessidades específicas. Criamos soluções de software que ajudam empresas a resolver desafios únicos, integrando-se aos fluxos de trabalho já existentes ou introduzindo novas funcionalidades que otimizam suas operações. Seja para um portal de clientes, sistemas de gestão internos, ferramentas de automação ou até mesmo integrações com APIs de terceiros, trabalhamos lado a lado com os nossos clientes para criar sistemas sob medida que geram valor e eficiência. Nossas soluções são escaláveis, seguras e adaptáveis para crescer junto com o seu negócio.',
      buttonText: 'Apresente sua ideia',
      link: 'https://wa.me/5541985075085' 
    },
    {
      icon: 'gtn gtn-support-light',
      title: 'Consultoria e Suporte Técnico',
      description: 'Nosso serviço de consultoria e suporte técnico garante que sua empresa tenha o acompanhamento necessário para manter e evoluir suas soluções digitais de forma eficiente. Prestamos suporte contínuo para sistemas, infraestrutura e aplicativos desenvolvidos, com um atendimento ágil e personalizado. Além disso, oferecemos consultoria estratégica para ajudar sua empresa a identificar oportunidades de melhoria, implementar novas tecnologias e otimizar processos, sempre com o foco em maximizar os resultados e garantir que suas soluções acompanhem o crescimento do negócio.',
      buttonText: 'Conte com a gente',
      link: 'https://wa.me/5541985075085'
    },
  ];
}
