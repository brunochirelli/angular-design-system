import { Component, Input } from '@angular/core';

import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'brn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class BrnButtonComponent {
  @Input() label!: string;
  @Input() variant?: 'primary' | 'secondary' = 'primary';

  constructor(private themeService: ThemeService) {}
}
