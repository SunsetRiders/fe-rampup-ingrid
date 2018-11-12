import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { ProfileInfo } from './profile-info';
import { ProfileInfoType } from './profile-info-type';

class HttpMock {
  get(url: string): Observable<ProfileInfo> {
    return of({
      name: 'test',
      content: 'string',
      type: ProfileInfoType.Calendar,
      highlight: true
    });
  }
}

describe('ProfileService', () => {
  let profileService: ProfileService;
  let http: HttpClient;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [{
      provide: HttpClient, useClass: HttpMock
    }]
  }));

  beforeEach(() => {
    profileService = TestBed.get(ProfileService);
    http = TestBed.get(HttpClient);
  });

  it('should be call the method http get', () => {
    const spy = spyOn(http, 'get');
    const profileInfo = profileService.getUserInfoFromBackEnd();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });

});
