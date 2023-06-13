import { Attribute, Component, Input } from '@angular/core';

import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'button[brn-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class BrnButtonComponent {
  @Input() variant?: 'primary' | 'secondary' = 'primary';

  // For Storybook
  label: string | undefined;

  constructor(
    private themeService: ThemeService,
    @Attribute('variant') variant: 'primary' | 'secondary' = 'primary'
  ) {}
}
