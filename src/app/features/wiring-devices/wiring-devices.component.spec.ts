import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiringDevicesComponent } from './wiring-devices.component';

describe('WiringDevicesComponent', () => {
  let component: WiringDevicesComponent;
  let fixture: ComponentFixture<WiringDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiringDevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiringDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
