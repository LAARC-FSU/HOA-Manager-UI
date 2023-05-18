import { TestBed } from '@angular/core/testing';

import { SaveScheduleService } from './save-schedule.service';

describe('SaveScheduleService', () => {
  let service: SaveScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
