import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrnButtonComponent } from './components/button/button.component';
import { BrnCardModule } from './components/card/card.module';
import { BrnIconsComponent } from './components/icons/icons.component';
import { BrnLinkComponent } from './components/link/link.component';

@NgModule({
  declarations: [BrnButtonComponent, BrnLinkComponent, BrnIconsComponent],
  imports: [CommonModule, BrnCardModule],
  exports: [BrnButtonComponent, BrnCardModule],
})
export class UiModule {}
