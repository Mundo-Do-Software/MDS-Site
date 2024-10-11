import { Component } from '@angular/core';
import { BannerPageComponent } from "../../shared/ui-components/banner-page/banner-page.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { DarkGrayBackgroundComponent } from "../../shared/ui-components/dark-gray-background/dark-gray-background.component";

@Component({
  selector: 'app-lgpd-page',
  standalone: true,
  imports: [BannerPageComponent, BlackBackgroundComponent, SectionTitleComponent, DarkGrayBackgroundComponent],
  templateUrl: './lgpd-page.component.html',
  styleUrl: './lgpd-page.component.scss'
})
export class LgpdPageComponent {

}
