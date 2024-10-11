import { Routes } from '@angular/router';
import { TemplateComponent } from './shared/template/template/template.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LgpdPageComponent } from './pages/lgpd-page/lgpd-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TermsOfUsePageComponent } from './pages/terms-of-use-page/terms-of-use-page.component';
import { IvertionCrmPageComponent } from './pages/ivertion-crm-page/ivertion-crm-page.component';
import { IvertionErpPageComponent } from './pages/ivertion-erp-page/ivertion-erp-page.component';

export const routes: Routes = [
    {
    path: '', component: TemplateComponent, children: [
        {path: '', component: HomePageComponent},
        {path: 'about', component: AboutPageComponent},
        //{path: 'blog', component: BlogPageComponent},
        {path: 'contact', component: ContactPageComponent},
        {path: 'lgpd', component: LgpdPageComponent},
        {path: 'projects', component: ProjectsPageComponent},
        {path: 'services', component: ServicesPageComponent},
        {path: 'terms-of-use', component: TermsOfUsePageComponent},
        {path: 'ivertion-crm', component: IvertionCrmPageComponent},
        {path: 'ivertion-erp', component: IvertionErpPageComponent},
    ]
}];
