import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrschuelerProfileComponent } from './fahrschueler-profile.component';

describe('FahrschuelerProfileComponent', () => {
  let component: FahrschuelerProfileComponent;
  let fixture: ComponentFixture<FahrschuelerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrschuelerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrschuelerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
