import { Component, Input } from '@angular/core';

@Component({
  selector: 'brn-icons',
  template: `
    <svg [ngStyle]="{ fill, 'width.px': width, 'height.px': width }">
      <use [attr.xlink:href]="getIconPath()" />
    </svg>
  `,
  styles: [
    `
      img {
        display: inline-block;
        vertical-align: middle;
        line-height: 0;
      }
    `,
  ],
})
export class IconsComponent {
  @Input() name!: string;
  @Input() fill = 'red';
  @Input() width = 80;

  private iconsPath = 'icons';

  getIconPath(): string {
    return `${this.iconsPath}/icons.svg#${this.name}`;
  }
}
