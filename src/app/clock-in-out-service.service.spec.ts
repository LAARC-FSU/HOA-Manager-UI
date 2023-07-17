import { TestBed } from '@angular/core/testing';

import { ClockInOutServiceService } from './clock-in-out-service.service';

describe('ClockInOutServiceService', () => {
  let service: ClockInOutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockInOutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
