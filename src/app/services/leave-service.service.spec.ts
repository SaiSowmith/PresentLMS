import { TestBed, inject } from '@angular/core/testing';

import { LeaveServiceService } from './leave-service.service';

describe('LeaveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveServiceService]
    });
  });

  it('should be created', inject([LeaveServiceService], (service: LeaveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
