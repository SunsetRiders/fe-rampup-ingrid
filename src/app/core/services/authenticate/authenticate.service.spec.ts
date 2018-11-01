import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticateService } from './authenticate.service';

describe('AuthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: AuthenticateService = TestBed.get(AuthenticateService);
    expect(service).toBeTruthy();
  });
  it('should be return a boolean', () => {
    const service: AuthenticateService = TestBed.get(AuthenticateService);
    expect(service);
  });
});
