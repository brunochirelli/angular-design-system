import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeBehavior = new BehaviorSubject<string>('light');

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.querySelector('html')?.setAttribute('data-theme', 'light');
  }

  toggleTheme() {
    const currentTheme = this.themeBehavior.value;
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

    this.document.querySelector('html')?.setAttribute('data-theme', nextTheme);
    this.themeBehavior.next(nextTheme);
  }
}
