import { TestBed } from '@angular/core/testing';

import { ReproLibService } from './repro-lib.service';

describe('ReproLibService', () => {
  let service: ReproLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReproLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
