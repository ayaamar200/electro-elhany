import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorLightsComponent } from './outdoor-lights.component';

describe('OutdoorLightsComponent', () => {
  let component: OutdoorLightsComponent;
  let fixture: ComponentFixture<OutdoorLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorLightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
