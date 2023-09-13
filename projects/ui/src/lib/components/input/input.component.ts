import { Component, Input } from '@angular/core';

@Component({
  selector: 'brn-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class BrnInputComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() cols = 30;
  @Input() rows = 5;
}
