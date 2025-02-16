import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrlehrerEditComponent } from './fahrlehrer-edit.component';

describe('FahrlehrerEditComponent', () => {
  let component: FahrlehrerEditComponent;
  let fixture: ComponentFixture<FahrlehrerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrlehrerEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrlehrerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
