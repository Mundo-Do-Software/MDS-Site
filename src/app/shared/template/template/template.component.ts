import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { BlackBackgroundComponent } from "../../ui-components/black-background/black-background.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, BlackBackgroundComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
