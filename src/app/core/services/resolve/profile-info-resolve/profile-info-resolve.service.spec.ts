import { TestBed } from '@angular/core/testing';

import { ProfileInfoResolveService } from './profile-info-resolve.service';

describe('ProfileInfoResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileInfoResolveService = TestBed.get(ProfileInfoResolveService);
    expect(service).toBeTruthy();
  });
});
