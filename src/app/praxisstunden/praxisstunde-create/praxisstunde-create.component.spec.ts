import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxisstundeCreateComponent } from './praxisstunde-create.component';

describe('PraxisstundeCreateComponent', () => {
  let component: PraxisstundeCreateComponent;
  let fixture: ComponentFixture<PraxisstundeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraxisstundeCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraxisstundeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
