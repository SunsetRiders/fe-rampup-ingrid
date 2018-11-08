import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('ProfileService', () => {
  let profileService: ProfileService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  beforeEach(() => {
    profileService = TestBed.get(ProfileService);
  });

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });

  it('should be call the method getUserInfoFromBackEnd', () => {
    const spy = spyOn(profileService, 'getUserInfoFromBackEnd');
    profileService.getUserInfoFromBackEnd();
    expect(spy).toHaveBeenCalled();
  });

  it('should return a ProfileInfo[]', () => {
    const profileInfo = profileService.getUserInfoFromBackEnd();
    expect(profileInfo); // Observable<ProfileInfo[]>
  });
});
