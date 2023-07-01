import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: BrnCardComponent;
  let fixture: ComponentFixture<BrnCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrnCardComponent],
    });
    fixture = TestBed.createComponent(BrnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
