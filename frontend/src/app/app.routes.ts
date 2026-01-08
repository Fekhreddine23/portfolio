import { Routes } from '@angular/router';
import { Home } from './components/home/home';


export const routes: Routes = [
    { path: '', component: Home, data: { titleKey: 'seo.home' } },
    { path: 'experience', loadComponent: () => import('./components/experience/experience').then(m => m.Experience), data: { titleKey: 'seo.experience' } },
    { path: 'education', loadComponent: () => import('./components/education/education').then(m => m.Education), data: { titleKey: 'seo.education' } },
    { path: 'skills', loadComponent: () => import('./components/skills/skills').then(m => m.Skills), data: { titleKey: 'seo.skills' } },
    { path: 'projects', loadComponent: () => import('./components/projects/projects').then(m => m.Projects), data: { titleKey: 'seo.projects' } },
    { path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.Contact), data: { titleKey: 'seo.contact' } },
    { path: '**', loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound), data: { titleKey: 'seo.notFound' } }
];
