import { TestBed } from '@angular/core/testing';

import { DDisplayService } from './d-display.service';

describe('DDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DDisplayService = TestBed.get(DDisplayService);
    expect(service).toBeTruthy();
  });
});
