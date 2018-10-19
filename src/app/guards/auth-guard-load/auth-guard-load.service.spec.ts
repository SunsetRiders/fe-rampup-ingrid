import { TestBed } from '@angular/core/testing';

import { AuthGuardLoadService } from './auth-guard-load.service';

describe('AuthGuardLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardLoadService = TestBed.get(AuthGuardLoadService);
    expect(service).toBeTruthy();
  });
});
