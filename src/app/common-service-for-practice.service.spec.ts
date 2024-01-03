import { TestBed } from '@angular/core/testing';

import { CommonServiceForPracticeService } from './common-service-for-practice.service';

describe('CommonServiceForPracticeService', () => {
  let service: CommonServiceForPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonServiceForPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
