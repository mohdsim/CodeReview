import { TestBed } from '@angular/core/testing';

import { FieldErrorsService } from './field-errors.service';

describe('FieldErrorsService', () => {
  let service: FieldErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
