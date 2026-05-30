import { Component } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
