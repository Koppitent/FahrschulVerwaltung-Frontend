import { TestBed } from '@angular/core/testing';

import { PraxisstundenService } from './praxisstunden.service';

describe('PraxisstundenService', () => {
  let service: PraxisstundenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraxisstundenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
