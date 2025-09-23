import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalFoundationComponent } from './electrical-foundation.component';

describe('ElectricalFoundationComponent', () => {
  let component: ElectricalFoundationComponent;
  let fixture: ComponentFixture<ElectricalFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricalFoundationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricalFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
