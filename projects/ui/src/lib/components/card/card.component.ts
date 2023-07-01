import { Component, HostBinding, Input } from '@angular/core';

import { CardVariant } from './card.model';

@Component({
  selector: 'brn-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.css'],
})
export class BrnCardComponent {
  @Input() variant: CardVariant = 'default';
  @HostBinding('class') get hostClass(): string {
    return `brn-card brn-card-${this.variant}`;
  }

  // Storybook
  label!: string;
}

@Component({
  selector: 'brn-card-header',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.css'],
})
export class BrnCardHeaderComponent {
  @HostBinding('class') get hostClass(): string {
    return `brn-card-header`;
  }

  // Storybook
  label!: string;
}

@Component({
  selector: 'brn-card-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.css'],
})
export class BrnCardBodyComponent {
  @HostBinding('class') get hostClass(): string {
    return `brn-card-body`;
  }

  // Storybook
  label!: string;
}
