import { Component, input } from '@angular/core';
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
export class AboutSection {
  readonly isActive = input(false);

  protected readonly navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
}
