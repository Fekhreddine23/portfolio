import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    theme = signal<'dark' | 'light'>('dark');

    constructor() {
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            this.setTheme('dark'); // Default to dark
        }
    }

    toggleTheme() {
        const newTheme = this.theme() === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    private setTheme(theme: 'dark' | 'light') {
        this.theme.set(theme);
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
}
