import { TestBed } from '@angular/core/testing';

import { UtilityserviceService } from './utilityservice.service';

describe('UtilityserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilityserviceService = TestBed.get(UtilityserviceService);
    expect(service).toBeTruthy();
  });
});
