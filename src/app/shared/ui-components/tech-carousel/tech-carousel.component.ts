import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tech-carousel.component.html',
  styleUrls: ['./tech-carousel.component.scss']
})
export class TechCarouselComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef<HTMLDivElement>;

  public technologies = [
    { name: 'Android', description: 'Nós desenvolvemos aplicações Android usando Flutter para eficiência e consistência cross-platform.', iconPath: '../../../assets/mds/icons/svg/icon-android.svg', learnMoreLink: '/learn/csharp' },
    { name: 'Android Studio', description: 'Nós utilizamos o Android Studio para otimizar o desenvolvimento e teste de aplicativos Android.', iconPath: '../../../assets/mds/icons/svg/icon-androidstudio.svg', learnMoreLink: '/learn/csharp' },
    { name: 'Angular', description: 'Nós empregamos Angular para construir interfaces web dinâmicas e interativas, utilizando TypeScript para melhorar a escalabilidade e manutenibilidade do código.', iconPath: '../../../assets/mds/icons/svg/icon-angular.svg', learnMoreLink: '/learn/csharp' },
    { name: 'Apple iOS', description: 'Nós desenvolvemos aplicações iOS utilizando Flutter, garantindo desempenho e consistência entre plataformas.', iconPath: '../../../assets/mds/icons/svg/icon-apple.svg', learnMoreLink: '/learn/csharp' },
    { name: 'Apple MacOS', description: 'Nós utilizamos macOS para desenvolvimento, aproveitando suas avançadas ferramentas e estabilidade', iconPath: '../../../assets/mds/icons/svg/icon-apple.svg', learnMoreLink: '/learn/csharp' },
    { name: 'C#', description: 'Nós desenvolvemos com C# para criar soluções robustas e eficientes no ecossistema .NET.', iconPath: '../../../assets/mds/icons/svg/icon-csharp.svg', learnMoreLink: '/learn/csharp' },
    { name: 'Dart', description: 'Nós utilizamos Dart no desenvolvimento com Flutter para criar aplicações móveis rápidas e responsivas em múltiplas plataformas.', iconPath: '../../../assets/mds/icons/svg/icon-dart.svg', learnMoreLink: '/learn/csharp' },
    { name: '.NET Core', description: 'Nós desenvolvemos aplicações escaláveis e seguras usando .NET Core, aproveitando sua performance e flexibilidade cross-platform.', iconPath: '../../../assets/mds/icons/svg/icon-dotnet.svg', learnMoreLink: '/learn/dotnetcore' },
    { name: 'Flutter', description: 'Nós usamos Flutter para desenvolver aplicações móveis cross-platform, garantindo alta performance e interface nativa tanto para Android quanto para iOS.', iconPath: '../../../assets/mds/icons/svg/icon-flutter.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Github', description: 'Nós utilizamos o GitHub para gerenciamento de versões e colaboração em projetos de software, assegurando eficiência e transparência no desenvolvimento.', iconPath: '../../../assets/mds/icons/svg/icon-github.svg', learnMoreLink: '/learn/javascript' },
    { name: 'JavaScript', description: 'Nós desenvolvemos com JavaScript para criar interfaces dinâmicas e responsivas na web, aproveitando sua flexibilidade e abrangência.', iconPath: '../../../assets/mds/icons/svg/icon-javascript.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Microsoft SQL Server', description: 'Nós utilizamos o Microsoft SQL Server para gerenciar dados críticos, garantindo segurança, desempenho e escalabilidade em nossas soluções corporativas.', iconPath: '../../../assets/mds/icons/svg/icon-sqlserver.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Microsoft Windows', description: 'Nós utilizamos o Microsoft Windows para desenvolvimento e tarefas administrativas, aproveitando sua compatibilidade ampla e suporte robusto a aplicações empresariais.', iconPath: '../../../assets/mds/icons/svg/icon-windows.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Mysql', description: 'Nós utilizamos o MySQL para gerenciar bancos de dados em aplicações web, destacando-se por sua eficiência e facilidade de uso.', iconPath: '../../../assets/mds/icons/svg/icon-mysql.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Node', description: 'Nós utilizamos Node.js para desenvolver serviços backend rápidos e escaláveis, aproveitando sua arquitetura orientada a eventos para aplicações de alto desempenho.', iconPath: '../../../assets/mds/icons/svg/icon-node.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Postman', description: 'Nós utilizamos Postman para testar APIs de forma eficiente, garantindo a robustez e a correta documentação das interfaces de comunicação.', iconPath: '../../../assets/mds/icons/svg/icon-postman.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Proxmox', description: 'Nós utilizamos Proxmox para gerenciamento de máquinas virtuais, facilitando a simulação de ambientes e a realização de testes em condições controladas.', iconPath: '../../../assets/mds/icons/svg/icon-proxmox.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Swagger', description: 'Nós usamos Swagger para documentar e testar APIs de forma clara e interativa, melhorando a comunicação entre desenvolvedores e stakeholders.', iconPath: '../../../assets/mds/icons/svg/icon-swagger.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Tailwind Css', description: 'Nós utilizamos Tailwind CSS para criar interfaces de usuário modernas e responsivas com rapidez, aproveitando sua abordagem de design utility-first.', iconPath: '../../../assets/mds/icons/svg/icon-tailwindcss.svg', learnMoreLink: '/learn/javascript' },
    { name: 'TypeScript', description: 'Nós utilizamos TypeScript para desenvolver aplicações JavaScript mais seguras e escaláveis, beneficiando-nos de sua tipagem estática.', iconPath: '../../../assets/mds/icons/svg/icon-typescript.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Ubuntu', description: 'Nós utilizamos Ubuntu para servidores e desenvolvimento, aproveitando sua estabilidade e ampla compatibilidade com tecnologias de software livre.', iconPath: '../../../assets/mds/icons/svg/icon-ubuntu.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Visual Studio', description: 'Nós utilizamos o Visual Studio para desenvolver e depurar aplicações de forma eficiente, tirando vantagem de suas poderosas ferramentas integradas e suporte abrangente para .NET e C#.', iconPath: '../../../assets/mds/icons/svg/icon-visualstudio.svg', learnMoreLink: '/learn/javascript' },
    { name: 'Visual Studio Code', description: 'Nós utilizamos o Visual Studio Code para programação em diversas linguagens, aproveitando sua flexibilidade e extensivo suporte a extensões que melhoram a produtividade no desenvolvimento.', iconPath: '../../../assets/mds/icons/svg/icon-vscode.svg', learnMoreLink: '/learn/javascript' },
    // More technologies
  ];

  ngOnInit(): void {
  }

  nextSlide() {
    const container = this.carouselContainer.nativeElement;
    container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
  }

  previousSlide() {
    const container = this.carouselContainer.nativeElement;
    container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
  }
}