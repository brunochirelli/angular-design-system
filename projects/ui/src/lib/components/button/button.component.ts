import { Component, Input } from '@angular/core';

@Component({
  selector: 'brn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class BrnButtonComponent {
  @Input() label!: string;
  @Input() variant?: 'primary' | 'secondary' = 'primary';
}
