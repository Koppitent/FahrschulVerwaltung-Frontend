import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrlehrerOverviewComponent } from './fahrlehrer-overview.component';

describe('FahrlehrerOverviewComponent', () => {
  let component: FahrlehrerOverviewComponent;
  let fixture: ComponentFixture<FahrlehrerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrlehrerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrlehrerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
