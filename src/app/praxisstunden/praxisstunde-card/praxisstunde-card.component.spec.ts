import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxisstundeCardComponent } from './praxisstunde-card.component';

describe('PraxisstundeCardComponent', () => {
  let component: PraxisstundeCardComponent;
  let fixture: ComponentFixture<PraxisstundeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraxisstundeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraxisstundeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
