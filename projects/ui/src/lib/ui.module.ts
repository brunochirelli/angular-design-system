import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrnButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';

@NgModule({
  declarations: [BrnButtonComponent, LinkComponent],
  imports: [CommonModule],
  exports: [BrnButtonComponent],
})
export class UiModule {}
