import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrschuelerAddComponent } from './fahrschueler-add.component';

describe('FahrschuelerAddComponent', () => {
  let component: FahrschuelerAddComponent;
  let fixture: ComponentFixture<FahrschuelerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrschuelerAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrschuelerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
