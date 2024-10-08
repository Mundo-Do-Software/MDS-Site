import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/ui-components/banner/banner.component";
import { CardDiferencialComponent } from "../../shared/ui-components/card-diferencial/card-diferencial.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { DarkGrayBackgroundComponent } from "../../shared/ui-components/dark-gray-background/dark-gray-background.component";
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { ServiceCardComponent } from "../../shared/ui-components/service-card/service-card.component";
import { CardServiceComponent } from "../../shared/ui-components/card-service/card-service.component";
import { CasesSliderComponent } from "../../shared/ui-components/cases-slider/cases-slider.component";
import { AboutSectionComponent } from "../../shared/ui-components/about-section/about-section.component";
import { ValuesComponent } from "../../shared/ui-components/values/values.component";
import { SectionTitleCenterComponent } from "../../shared/ui-components/section-title-center/section-title-center.component";
import { TechCarouselComponent } from "../../shared/ui-components/tech-carousel/tech-carousel.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent, 
    CardDiferencialComponent, 
    BlackBackgroundComponent, 
    DarkGrayBackgroundComponent, 
    SectionTitleComponent, 
    ServiceCardComponent, 
    CardServiceComponent, 
    CasesSliderComponent, 
    AboutSectionComponent, 
    ValuesComponent, 
    SectionTitleCenterComponent, 
    TechCarouselComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
