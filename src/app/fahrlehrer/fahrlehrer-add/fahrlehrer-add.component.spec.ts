import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrlehrerAddComponent } from './fahrlehrer-add.component';

describe('FahrlehrerAddComponent', () => {
  let component: FahrlehrerAddComponent;
  let fixture: ComponentFixture<FahrlehrerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrlehrerAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrlehrerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
