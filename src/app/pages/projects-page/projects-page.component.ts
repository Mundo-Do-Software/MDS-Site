import { Component } from '@angular/core';
import { BannerPageComponent } from "../../shared/ui-components/banner-page/banner-page.component";
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { CardImageComponent } from "../../shared/ui-components/card-image/card-image.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [BannerPageComponent, SectionTitleComponent, BlackBackgroundComponent, CardImageComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
