// src/app/shared/template/header/header.component.ts
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ]
})
export class HeaderComponent {
  isMenuOpen = false;
  lastScrollTop = 0;
  headerVisible = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onWindowScroll);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = (): void => {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (this.lastScrollTop > currentScrollPos || currentScrollPos <= 10) {
      this.headerVisible = true;
    } else {
      this.headerVisible = false;
    }
    this.lastScrollTop = currentScrollPos;
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}