import { TestBed } from '@angular/core/testing';

import { ProfileInfoResolveService } from './profile-info-resolve.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileInfoResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: ProfileInfoResolveService = TestBed.get(ProfileInfoResolveService);
    expect(service).toBeTruthy();
  });
});
