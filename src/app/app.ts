import { AfterViewInit, Component, HostListener, signal } from '@angular/core';
import { SiteChrome } from './layout/site-chrome/site-chrome';
import { AboutSection } from './sections/about-section/about-section';
import { HeroSection } from './sections/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [SiteChrome, HeroSection, AboutSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly activeSection = signal('home');

  private readonly sectionIds = ['home', 'about'];

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const triggerLine = window.innerHeight * 0.5;
    let current = this.sectionIds[0];

    for (const id of this.sectionIds) {
      const marker = document.getElementById(id);

      if (marker && marker.getBoundingClientRect().top <= triggerLine) {
        current = id;
      }
    }

    this.activeSection.set(current);
  }
}
