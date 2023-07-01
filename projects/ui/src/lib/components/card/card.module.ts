import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  BrnCardBodyComponent,
  BrnCardComponent,
  BrnCardHeaderComponent,
} from './card.component';

@NgModule({
  declarations: [
    BrnCardComponent,
    BrnCardHeaderComponent,
    BrnCardBodyComponent,
  ],
  imports: [CommonModule],
  exports: [BrnCardComponent, BrnCardHeaderComponent, BrnCardBodyComponent],
})
export class BrnCardModule {}
