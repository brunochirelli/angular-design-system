import { Component, Input } from '@angular/core';

@Component({
  selector: 'brn-icons',
  templateUrl: `./icons.component.html`,
  styleUrls: ['./icons.component.css'],
})
export class IconsComponent {
  @Input() name!: string;
  @Input() fill = 'black';
  @Input() width = 25;

  private iconsPath = 'icons';

  getIconPath(): string {
    return `${this.iconsPath}/icons.svg#${this.name}`;
  }
}
