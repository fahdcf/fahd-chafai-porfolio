import { Component, input } from '@angular/core';
import { LucideAsterisk, LucideMail } from '@lucide/angular';

@Component({
  selector: 'app-site-chrome',
  imports: [LucideAsterisk, LucideMail],
  templateUrl: './site-chrome.html',
  styleUrl: './site-chrome.scss',
})
export class SiteChrome {
  readonly activeSection = input('home');

  protected readonly navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];
}
