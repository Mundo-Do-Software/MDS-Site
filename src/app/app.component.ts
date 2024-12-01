import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = "Mundo do Software | Soluções Inteligentes em Desenvolvimento e Infraestrutura";
  description = "O Mundo do Software oferece soluções completas em desenvolvimento de sistemas, aplicativos mobile, e infraestrutura. Descubra como podemos transformar seu negócio com tecnologia de ponta.";
  keywords = "Mundo do Software, desenvolvimento de software, desenvolvimento web, aplicativos mobile, infraestrutura tecnológica, consultoria em TI, iVertion CRM, soluções empresariais, sistemas personalizados, ERP e CRM, SaaS, software sob demanda, soluções em tecnologia, sistemas inteligentes, inovação em TI, desenvolvimento ágil, Angular, Flutter, .NET, Python, C#, startups, tecnologia de ponta";
  ogTitle = "Mundo do Software | Inovação em Desenvolvimento e Tecnologia";
  ogDescription = "Oferecemos soluções personalizadas em desenvolvimento de software, infraestrutura e consultoria técnica para empresas. Transforme sua ideia em realidade com o Mundo do Software.";
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag({ name: 'description', content: this.description });
    this.metaService.updateTag({ name: 'keywords', content: this.keywords });
    this.metaService.updateTag({ property: 'og:title', content: this.ogTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.ogDescription });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_da_Imagem' });
    

  }
}