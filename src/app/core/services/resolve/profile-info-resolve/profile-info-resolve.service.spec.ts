import { TestBed } from '@angular/core/testing';

import { ProfileInfoResolveService } from './profile-info-resolve.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from '../../profile/profile.service';

describe('ProfileInfoResolveService', () => {

  let profileInfoResolveService: ProfileInfoResolveService;
  let profileService: ProfileService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ ProfileService ]
  }));

  beforeEach(() => {
    profileService = TestBed.get(ProfileService);
    profileInfoResolveService = TestBed.get(ProfileInfoResolveService);
  });

  it('should be created', () => {
    const service: ProfileInfoResolveService = TestBed.get(ProfileInfoResolveService);
    expect(service).toBeTruthy();
  });

  it('should be called the method resolve', () => {
    const spy = spyOn(profileInfoResolveService, 'resolve');
    profileInfoResolveService.resolve();
    expect(spy).toHaveBeenCalled();
  });

  it('should be called the method getUserInfoFromBackEnd', () => {
    const spy = spyOn(profileService, 'getUserInfoFromBackEnd');
    profileInfoResolveService.resolve();
    expect(spy).toHaveBeenCalled();
  });
});
