import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class BrnButtonComponent implements OnInit {
  @Input('label') label!: string;
  @Input('variant') variant?: 'primary' | 'secondary' = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
