import { TestBed } from '@angular/core/testing';

import { HypeService } from './hype.service';

describe('HypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HypeService = TestBed.get(HypeService);
    expect(service).toBeTruthy();
  });
});
