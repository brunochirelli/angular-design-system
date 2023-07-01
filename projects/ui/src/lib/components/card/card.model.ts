import {
  BrnCardBodyComponent,
  BrnCardComponent,
  BrnCardHeaderComponent,
} from './card.component';

export type CardVariant = 'default' | 'filled' | 'outline';

export type CardType = BrnCardHeaderComponent &
  BrnCardComponent &
  BrnCardBodyComponent;
