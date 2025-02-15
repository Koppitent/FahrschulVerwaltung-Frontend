import { TestBed } from '@angular/core/testing';

import { FahrschuelerService } from './fahrschueler.service';

describe('FahrschuelerService', () => {
  let service: FahrschuelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FahrschuelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
