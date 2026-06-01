import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { LucideAsterisk, LucideMail } from '@lucide/angular';

@Component({
  selector: 'app-site-chrome',
  imports: [LucideAsterisk, LucideMail],
  templateUrl: './site-chrome.html',
  styleUrl: './site-chrome.scss',
})
export class SiteChrome implements OnInit, OnDestroy {
  protected readonly navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  protected readonly activeSection = signal('home');

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.05, 0.25, 0.5, 0.75],
      },
    );

    for (const { id } of this.navItems) {
      const section = document.getElementById(id);
      if (section) {
        this.observer.observe(section);
      }
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
