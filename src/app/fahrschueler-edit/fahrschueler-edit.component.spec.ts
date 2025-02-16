import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrschuelerEditComponent } from './fahrschueler-edit.component';

describe('FahrschuelerEditComponent', () => {
  let component: FahrschuelerEditComponent;
  let fixture: ComponentFixture<FahrschuelerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrschuelerEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrschuelerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
