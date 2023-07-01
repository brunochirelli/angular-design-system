import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnLinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: BrnLinkComponent;
  let fixture: ComponentFixture<BrnLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrnLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrnLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
