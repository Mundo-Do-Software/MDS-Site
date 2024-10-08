import { Routes } from '@angular/router';
import { TemplateComponent } from './shared/template/template/template.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LgpdPageComponent } from './pages/lgpd-page/lgpd-page.component';
import { PrivacyPolicePageComponent } from './pages/privacy-police-page/privacy-police-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TermsOfUsePageComponent } from './pages/terms-of-use-page/terms-of-use-page.component';

export const routes: Routes = [
    {
    path: '', component: TemplateComponent, children: [
        {path: '', component: HomePageComponent},
        {path: 'about', component: AboutPageComponent},
        //{path: 'blog', component: BlogPageComponent},
        {path: 'contact', component: ContactPageComponent},
        {path: 'lgpd', component: LgpdPageComponent},
        {path: 'privacy-police', component: PrivacyPolicePageComponent},
        {path: 'projects', component: ProjectsPageComponent},
        {path: 'services', component: ServicesPageComponent},
        {path: 'terms-of-use', component: TermsOfUsePageComponent},
    ]
}];
