import { Component } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideAsterisk,
  LucideBrain,
  LucideCoffee,
  LucideDatabase,
  LucideDownload,
  LucideHouse,
  LucideMail,
} from '@lucide/angular';

@Component({
  selector: 'app-hero-section',
  imports: [
    LucideArrowUpRight,
    LucideAsterisk,
    LucideBrain,
    LucideCoffee,
    LucideDatabase,
    LucideDownload,
    LucideHouse,
    LucideMail,
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  protected readonly navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
}
