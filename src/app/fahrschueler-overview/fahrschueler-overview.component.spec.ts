import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrschuelerOverviewComponent } from './fahrschueler-overview.component';

describe('FahrschuelerOverviewComponent', () => {
  let component: FahrschuelerOverviewComponent;
  let fixture: ComponentFixture<FahrschuelerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrschuelerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrschuelerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
