import { Component } from '@angular/core';
import { SiteChrome } from './layout/site-chrome/site-chrome';
import { AboutSection } from './sections/about-section/about-section';
import { HeroSection } from './sections/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [SiteChrome, HeroSection, AboutSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
