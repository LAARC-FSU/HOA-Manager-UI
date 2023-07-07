import { TestBed } from '@angular/core/testing';

import { MemberSearchServiceService } from './member-search-service.service';

describe('MemberSearchServiceService', () => {
  let service: MemberSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
