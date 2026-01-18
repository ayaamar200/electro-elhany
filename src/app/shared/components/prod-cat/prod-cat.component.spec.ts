import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCatComponent } from './prod-cat.component';

describe('ProdCatComponent', () => {
  let component: ProdCatComponent;
  let fixture: ComponentFixture<ProdCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
