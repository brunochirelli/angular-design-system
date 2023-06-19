import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'button[brn-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class BrnButtonComponent implements OnInit {
  @Input() variant?: 'primary' | 'secondary' = 'primary';
  @Input() size?: 'sm' | 'md' | 'lg' = 'md';

  // For Storybook
  label: string | undefined;

  constructor(private themeService: ThemeService, private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.variant, this.size);
  }
}
