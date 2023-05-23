import { TestBed } from '@angular/core/testing';

import { CentralizService } from './centraliz.service';

describe('CentralizService', () => {
  let service: CentralizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
