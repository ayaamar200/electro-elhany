import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeLightsComponent } from './decorative-lights.component';

describe('DecorativeLightsComponent', () => {
  let component: DecorativeLightsComponent;
  let fixture: ComponentFixture<DecorativeLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecorativeLightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorativeLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
