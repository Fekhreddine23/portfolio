import { Component, effect, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private translationService = inject(TranslationService);

  constructor() {
    // 1. Listen to Router Events to update SEO on page change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe((event) => {
      this.updateSeo(event['titleKey']);
    });

    // 2. Listen to Language Changes using Signal Effect
    effect(() => {
      // Triggered whenever currentLang signal changes
      const lang = this.translationService.currentLang(); // Access signal to track dependency

      // Get current route's titleKey matching the current URL
      let route = this.activatedRoute;
      while (route.firstChild) route = route.firstChild;
      const titleKey = route.snapshot.data['titleKey'];

      this.updateSeo(titleKey);

      // Update HTML lang attribute
      document.documentElement.lang = lang;
    });
  }

  private updateSeo(titleKey: string) {
    if (!titleKey) {
      // Fallback
      const defaultTitle = this.translationService.get('seo.defaultTitle');
      const defaultDesc = this.translationService.get('seo.defaultDesc');
      this.titleService.setTitle(defaultTitle);
      this.metaService.updateTag({ name: 'description', content: defaultDesc });
      this.updateOgTags(defaultTitle, defaultDesc);
      return;
    }

    const title = this.translationService.get(titleKey + '.title');
    const desc = this.translationService.get(titleKey + '.desc');

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: desc });
    this.updateOgTags(title, desc);
  }

  private updateOgTags(title: string, desc: string) {
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/favicon.png' }); // Simplify, or use a specific social card later
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
  }
}
