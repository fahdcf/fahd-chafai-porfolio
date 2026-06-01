import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';
import {
  LucideAsterisk,
  LucideLightbulb,
  LucideMail,
  LucidePuzzle,
  LucideSearch,
  LucideTrendingUp,
} from '@lucide/angular';

@Component({
  selector: 'app-about-section',
  imports: [
    LucideAsterisk,
    LucideLightbulb,
    LucideMail,
    LucidePuzzle,
    LucideSearch,
    LucideTrendingUp,
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection implements AfterViewInit, OnDestroy {
  protected readonly navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  protected readonly isVisible = signal(false);

  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const section = this.elementRef.nativeElement.querySelector('.about');

    if (!section) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible.set(true);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -18% 0px',
      },
    );

    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
