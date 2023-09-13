import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: BrnInputComponent;
  let fixture: ComponentFixture<BrnInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrnInputComponent],
    });
    fixture = TestBed.createComponent(BrnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
