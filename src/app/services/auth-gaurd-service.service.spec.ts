import { TestBed, inject } from '@angular/core/testing';

import { AuthGaurdServiceService } from './auth-gaurd-service.service';

describe('AuthGaurdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurdServiceService]
    });
  });

  it('should be created', inject([AuthGaurdServiceService], (service: AuthGaurdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
