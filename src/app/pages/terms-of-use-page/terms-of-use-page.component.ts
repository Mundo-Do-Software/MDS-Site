import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../shared/ui-components/section-title/section-title.component";
import { BlackBackgroundComponent } from "../../shared/ui-components/black-background/black-background.component";
import { DarkGrayBackgroundComponent } from "../../shared/ui-components/dark-gray-background/dark-gray-background.component";
import { BannerPageComponent } from "../../shared/ui-components/banner-page/banner-page.component";

@Component({
  selector: 'app-terms-of-use-page',
  standalone: true,
  imports: [SectionTitleComponent, BlackBackgroundComponent, DarkGrayBackgroundComponent, BannerPageComponent],
  templateUrl: './terms-of-use-page.component.html',
  styleUrl: './terms-of-use-page.component.scss'
})
export class TermsOfUsePageComponent {

}
