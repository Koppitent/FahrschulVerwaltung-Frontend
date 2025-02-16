import { TestBed } from '@angular/core/testing';

import { FahrlehrerService } from './fahrlehrer.service';

describe('FahrlehrerService', () => {
  let service: FahrlehrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FahrlehrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
