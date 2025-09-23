import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorLightsComponent } from './indoor-lights.component';

describe('IndoorLightsComponent', () => {
  let component: IndoorLightsComponent;
  let fixture: ComponentFixture<IndoorLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorLightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
